/* eslint-disable max-len */
import {getProducts} from './src/components/card';
import {getSellers} from './src/components/sellers';
import {handleSearch, 
  handleSellerFilter,
  debounce, 
  handlePriceFilter, 
  handleStockFilter, 
  handleClean} from './src/components/filters'

getProducts();
getSellers();

const searchInputDesktop = document.querySelector('.header-input-desktop');
searchInputDesktop.addEventListener('input', handleSearch);
const searchInputMobile = document.querySelector('.header-input-mobile');
searchInputMobile.addEventListener('input', handleSearch);

const sellerSelectElement = document.querySelector('.seller-select');
sellerSelectElement.addEventListener('input', handleSellerFilter);

const maxPrice = document.querySelector('.price-input');
maxPrice.addEventListener('input', debounce(handlePriceFilter, 1500));

const stockSelectElement = document.querySelector('.stock-select');
stockSelectElement.addEventListener('input', handleStockFilter);

const cleanButton = document.querySelector('.reset-button');
cleanButton.addEventListener('click', handleClean);