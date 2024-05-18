async function scrapProductData(productUrl) {
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(productUrl)}`);
    const { contents } = await response.json();

    const parser = new DOMParser();
    const doc = parser.parseFromString(contents, 'text/html');

    const itemInfo = doc.querySelector('.item-info');
    const name = itemInfo?.querySelector('h1')?.textContent.trim() || '';
    const price = itemInfo?.querySelector('.features__price')?.textContent.trim() || '';
    const description = doc.querySelector('.item-description__text p')?.textContent.trim() || '';

    if (!name && !price && !description) {
      throw new Error('Impossibile trovare i dati del prodotto');
    }

    return { name, price, description };
  } catch (error) {
    console.error('Errore durante lo scraping dei dati del prodotto:', error);
    return { name: '', price: '', description: '' };
  }
}
async function generateProductCard(product) {
  const { name, price, description } = await scrapProductData(product.link);

  return `
    <div class="product-card">
      <img src="${product.image}" alt="${name}" loading="lazy">
      <h3>${name}</h3>
      <p>${description}</p>
      <p>${price}</p>
      <a href="${product.link}" class="btn">Acquista su Subito.it</a>
    </div>
  `;
}

async function generateProductCards() {
  const productGrid = document.querySelector(".product-grid");
  const products = await loadProductData();

  const cardPromises = products.map(async (product) => {
    const cardHTML = await generateProductCard(product);
    return cardHTML;
  });

  const cardHTMLs = await Promise.all(cardPromises);
  productGrid.innerHTML = cardHTMLs.join('');
}

function animateSections() {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      section.classList.add("animate");
    }
  });
}

document.addEventListener("DOMContentLoaded", generateProductCards);

window.addEventListener("load", animateSections);
window.addEventListener("scroll", animateSections);

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});