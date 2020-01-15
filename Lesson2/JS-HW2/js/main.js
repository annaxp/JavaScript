'use strict';

// ЗАДАНИЕ
//  1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
//  2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000, img: './img/401_1.jpg'},
      {id: 2, title: 'Mouse', price: 1500, img: './img/202_2.jpg'},
      {id: 3, title: 'Keyboard', price: 5000, img: './img/301_2.jpg'},
      {id: 4, title: 'Gamepad', price: 1500, img: 'https://placehold.it/200x150'}, // костыль
    ]
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') { // не срабатывает значение по умолчанию после иср=правления в строке 41
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = product.img; // исправила так, как не считывает картинку с goods
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

const list = new ProductList();
console.log(list);


// НИЖЕ урок 1
//
// const products = [
//   {id: 1, title: 'Notebook', price: 20000, img: './img/401_1.jpg'},
//   {id: 2, title: 'Mouse', price: 1500, img: './img/202_2.jpg'},
//   {id: 3, title: 'Keyboard', price: 5000, img: './img/301_2.jpg'},
//   {id: 4, title: 'Gamepad', price: 4500},
//   {id: 5, title: 'Notebook2', price: 100},
//   {id: 6, title: 'Notebook3', price: 4500},
//   {id: 7, title: 'Gamepad3', price: 100},
//   {id: 8, title: 'Gamepad4', price: 100},
//
// ];
//
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${item.title}</h3>
//                     <p>${item.price} \u20bd</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`;
//
// const renderProducts = list => {
//   document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
// };
//
// renderProducts(products);

