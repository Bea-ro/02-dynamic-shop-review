/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { products } from '../data/data';

const sellersList = [];

const printSellers = () => {
  sellersList.sort();
  sellersList.forEach((item) => {
    const uniqueSeller = item;
    const optionElement = document.createElement('option');
    const sellerSelectElement = document.querySelector('.seller-select');
    sellerSelectElement.append(optionElement);
    optionElement.value = uniqueSeller;
    optionElement.innerText += uniqueSeller;
  });
};

export const getSellers = () => {
  products.forEach((product) => {
    if (!sellersList.includes(product.seller)) {
      sellersList.push(product.seller);
    }
  });
  printSellers();
};
