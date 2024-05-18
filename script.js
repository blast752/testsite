// Array di prodotti
const products = [
  {
  name: "Asus ROG Strix Z690-F Gaming WiFi - NUOVA GARANZIA",
  description: "Asus ROG Strix Z690-F Gaming WiFi - NUOVA con GARANZIA Amazon 2 anni, mai aperta ancora imballata!",
  price: "€160",
  image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/c9/c941e313-313a-461e-8f24-f3861965bce8?rule=gallery-mobile-1x-auto",
  link: "https://www.subito.it/informatica/asus-rog-strix-z690-f-gaming-wifi-nuova-garanzia-latina-551000853.htm"
  },
  {
  name: "Monitor Asus VG278QF 27 FULL-HD 165 HZ",
  description: "Vendo questo belissimo monitor ASUS VG278QF, usato 1 anno e mezzo, COME NUOVO e con SCATOLA ORIGINALE! Un concentrato di tecnologia e prestazioni per veri appassionati. Perfetto per gaming e multitasking, questo monitor eleva ogni sessione di gioco a un livello superiore.",
  price: "€140",
  image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/a1/a1fd78ff-86d2-4dfb-9e03-ea16047ee4fe?rule=gallery-desktop-1x-auto",
  link: "https://www.subito.it/informatica/monitor-asus-vg278qf-27-full-hd-165-hz-latina-534813659.htm"
  },
  {
  name: "IN ARRIVO",
  description: "IN ARRIVO",
  price: "IN ARRIVO",
  image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/a1/a1fd78ff-86d2-4dfb-9e03-ea16047ee4fe?rule=gallery-desktop-1x-auto",
  link: "https://www.subito.it/informatica/monitor-asus-vg278qf-27-full-hd-165-hz-latina-534813659.htm"
  },
  {
    name: "IN ARRIVO",
    description: "IN ARRIVO",
    price: "IN ARRIVO",
    image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/a1/a1fd78ff-86d2-4dfb-9e03-ea16047ee4fe?rule=gallery-desktop-1x-auto",
    link: "https://www.subito.it/informatica/monitor-asus-vg278qf-27-full-hd-165-hz-latina-534813659.htm"
  },
  {
    name: "IN ARRIVO",
    description: "IN ARRIVO",
    price: "€IN ARRIVO",
    image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/a1/a1fd78ff-86d2-4dfb-9e03-ea16047ee4fe?rule=gallery-desktop-1x-auto",
    link: "https://www.subito.it/informatica/monitor-asus-vg278qf-27-full-hd-165-hz-latina-534813659.htm"
  },

  
  // Aggiungi altri prodotti qui
  ];
  
  // Funzione per generare le card dei prodotti
  function generateProductCards() {
  const productGrid = document.querySelector(".product-grid");
  ini
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
  
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.srcset = `
      ${product.image} 1x,
      ${product.image.replace('gallery-mobile-1x-auto', 'gallery-mobile-2x-auto')} 2x,
      ${product.image.replace('gallery-mobile-1x-auto', 'gallery-mobile-3x-auto')} 3x
    `;
    image.loading = "lazy";
  
    const name = document.createElement("h3");
    name.textContent = product.name;
  
    const description = document.createElement("p");
    description.textContent = product.description;
  
    const price = document.createElement("p");
    price.textContent = product.price;
  
    const link = document.createElement("a");
    link.href = product.link;
    link.classList.add("btn");
    link.textContent = "Acquista su Subito.it";
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(link);
  
    productGrid.appendChild(card);
  });
  
  }
  
  // Funzione per animare le sezioni al caricamento
  function animateSections() {
  const sections = document.querySelectorAll("section");
  ini
  
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
  
  // Anima le sezioni al caricamento della pagina
  window.addEventListener("load", animateSections);
  
  // Anima le sezioni allo scorrimento della pagina
  window.addEventListener("scroll", animateSections);
  
  // Toggle del menu su dispositivi mobili
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  
  menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  });