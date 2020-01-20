'use strict';

// ЗАДАНИЕ
//  1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

// class Cart  {
//   constructor(cartBlock = '.cart') {
//     this.cartBlock = cartBlock; // контейнер корзины
//     this.catalogList = [];
//     this.goods = [];
//     this.delProduct; // метод удаления товара из корзины
//     this.clearCart(); // метод очистки корзины
//     this.changeCount; // изменение колличества товара
//     this.countCartGoods; // подсчет стоимости корзины
//     this.addEventHandlers(); // Метод установки обработчиков событий
//     this.addToCart; // Добавление товаров
//     this.getCartGoodsLength(); //Получение количества товаров в корзине
//     this.renderEmptyCart(); // Рендер пустой корзины
//     this.render(); //Рендер списка товаров в корзине
//   }
// };
//
// class CartItem {
//   constructor(product) {
//     this.product = product;
//     this.title = product.title;
//     this.price = product.price;
//     this.id = product.id;
//     this.img = product.img;
//     this.count = product.count;
//     this.render(); // Рендер отдельного товара в корзине
//   }
// }




//  2. Добавьте для GoodsList = ProductList метод, определяющий суммарную стоимость всех товаров.

class ProductList { // класс всех товаров
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];  // товары которые будут приходить с сервера
    this.allProducts = []; // сгенерированные товары
    this._fetchProducts(); //вызов метода эмулирования запроса на сервер
    this.render();
    this.countGoods();// подсчет стоимости товаров
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
      const productObject = new ProductItem(product);  // обращение ко 2-му классу /не передали img
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  countGoods() {

    for (let product of this.goods) {
      let totalPrice = 0;
      totalPrice += product.price; //  * product.counter дописать потом в корзине
      console.log(totalPrice); // !!! не пойму почему товары не суммируются!!!
    }

  }
}

class ProductItem {  // отдельные товарчики
  constructor(product, img = 'https://placehold.it/200x150') { // не срабатывает значение по умолчанию после исрправления в строке 41
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

