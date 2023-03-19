const sellersList = [];

export const getSellers = () => {
  fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then((response) => {
      response.forEach((product) => {
        if (!sellersList.includes(product.seller)) {
          sellersList.push(product.seller);
        }
      });
      printSellers();
    });
};



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