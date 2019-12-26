'use strict';

const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
  {id: 5, title: '333', price: 100},
  {id: 6, title: '444', price: 4500},
  {id: 7, title: '555', price: 100},
  {id: 8, title: '666', price: 100},

];

const renderProduct = (item, img = 'https://placehold.it/200x150') => {
  return `<div class="product-item">
        <img src="${img}" alt="Some img">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = list => {
  // const productList = list.map(product => renderProduct(product.title, product.price));
  const productList = list.map(function (product) {
    return renderProduct(product.title, product.price)
  });
  console.log(productList);
  document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
