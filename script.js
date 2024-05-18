async function loadProductData() {
  try {
    const response = await fetch('products.json');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Errore durante il caricamento dei dati dei prodotti:', error);
    return [];
  }
}

function generateProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>${product.price}</p>
      <a href="${product.link}" class="btn">Acquista su Subito.it</a>
    </div>
  `;
}

async function generateProductCards() {
  const productGrid = document.querySelector(".product-grid");
  const products = await loadProductData();

  products.forEach(product => {
    const cardHTML = generateProductCard(product);
    productGrid.innerHTML += cardHTML;
  });
}

// Funzione per animare le sezioni al caricamento
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

// Genera le card dei prodotti al caricamento della pagina
document.addEventListener("DOMContentLoaded", generateProductCards);

// Anima le sezioni al caricamento e allo scorrimento della pagina
window.addEventListener("load", animateSections);
window.addEventListener("scroll", animateSections);

// Toggle del menu su dispositivi mobili
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});