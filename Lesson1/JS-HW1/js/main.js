'use strict';

const products = [
  {id: 1, title: 'Notebook', price: 20000, img: './img/401_1.jpg'},
  {id: 2, title: 'Mouse', price: 1500, img: './img/202_2.jpg'},
  {id: 3, title: 'Keyboard', price: 5000, img: './img/301_2.jpg'},
  {id: 4, title: 'Gamepad', price: 4500},
  {id: 5, title: 'Notebook2', price: 100},
  {id: 6, title: 'Notebook3', price: 4500},
  {id: 7, title: 'Gamepad3', price: 100},
  {id: 8, title: 'Gamepad4', price: 100},

];

// const renderProduct = (item, img = 'https://placehold.it/200x150') => {
//   return `<div class="product-item">
//         <img src="${img}" alt="Some img">
//          <div class="desc">
//             <h3>${item.title}</h3>
//             <p>${item.price}</p>
//             <button class="by-btn">Добавить в корзину</button>
//              </div>
//           </div>`;
// };

const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item">
                <img src="${img}" alt="Some img">
                <div class="desc">
                    <h3>${item.title}</h3>
                    <p>${item.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;

const renderProducts = list => {
  document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);




// const renderProducts = list => {
//   // const productList = list.map(product => renderProduct(product.title, product.price));
//   const productList = list.map(function (product) {
//     return renderProduct(product.title, product.price)
//   });
//   console.log(productList);
//   document.querySelector('.products').innerHTML = productList;
// };
//
// renderProducts(products);
