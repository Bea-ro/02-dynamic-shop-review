import { productsList, updateProductsList, getProducts, printProducts} from './card';
import './filters.css';

const searchByName = (keyword, productList) =>
  productList.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase()));

export const handleSearch = (ev) => {
  const filteredList = searchByName(ev.target.value, productsList);
  printProducts(filteredList);
};

const sellerFilter = (seller, productList) => 
  productList.filter((product) => product.seller === seller);

export const handleSellerFilter = (ev) => {
  const filteredProductsList = sellerFilter(ev.target.value, productsList);
  updateProductsList(filteredProductsList);
  printProducts(productsList);
};

const filterByPrice = (price, productList) =>
  productList.filter((product) => product.price <= price);

export const handlePriceFilter = (ev) => {
  const filteredProductsList = filterByPrice(ev.target.value, productsList);
  updateProductsList(filteredProductsList);
  printProducts(productsList);
};

export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const filterByStock = (stock, productList) =>
  productList.filter((product) => product.stock.toString() === stock);

export const handleStockFilter = (ev) => {
  const filteredList = filterByStock(ev.target.value, productsList);
  printProducts(filteredList);
};


const sellerSelectElement = document.querySelector('.seller-select');
const maxPrice = document.querySelector('.price-input');
const stockSelectElement = document.querySelector('.stock-select');

export const handleClean = () => {
  sellerSelectElement.selectedIndex = 0;
  maxPrice.value = '';
  stockSelectElement.selectedIndex = 0;
  getProducts();
};
