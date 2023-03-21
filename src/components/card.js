/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import './card.css';

const productsSection = document.querySelector('.products-section');
const productsContainer = document.createElement('ul');
productsSection.append(productsContainer);
productsContainer.className = 'products-container';
const noProductsMessage = document.createElement('div');
noProductsMessage.className = 'message';
productsSection.append(noProductsMessage);

export let productsList = [];

export const updateProductsList = (newProductsList) => {productsList = newProductsList}

export const printProducts = (list) => {
  productsContainer.innerHTML = '';
  list.forEach((product) => {
    const productTemplate = `       
        <a href="${product.link}" target="blank" rel="noopnener noreferrer">
        <figure class="product-img-container">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        </figure>
        <p class="product-name">${product.name}</p>
        <div class="price-info">
        <p class="price">${product.price}€</p>
        <span class="promo">${product.promo ? 'OFERTA' : ''}</span>
        </div>
        <p class="stars">Valoración: ${product.stars}/5 (${product.reviews})</p>
        <p class="stock">${product.stock ? 'Recíbelo mañana' : 'Recíbelo en 7 días'}</p>
        <p class="seller">Vendido por ${product.seller}</p>
        </a>
`;
    const productCard = document.createElement('li');
    productCard.className = 'product-card';
    productCard.innerHTML += productTemplate;
    productsContainer.append(productCard);
  });
  if (list.length === 0) {
    noProductsMessage.innerText =
      'Lo sentimos. No hay artículos con las características seleccionadas.';
  } else {
    noProductsMessage.innerText = '';
  }
};

export const getProducts = async () => {
  const res = await fetch('http://localhost:3000/products');
  productsList = await res.json();
  printProducts(productsList);
};
