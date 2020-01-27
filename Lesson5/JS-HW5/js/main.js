
//Добавить методы и обработчики событий для поля поиска. Создать в объекте данных поле searchLine и привязать к нему содержимое поля ввода. На кнопку «Искать» добавить обработчик клика, вызывающий метод FilterGoods.
// 2. Добавить корзину. В html-шаблон добавить разметку корзины. Добавить в объект данных поле isVisibleCart, управляющее видимостью корзины.
// 3. *Добавлять в .goods-list заглушку с текстом «Нет данных» в случае, если список товаров пуст.

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '', //поле поиска
    showCart: false, // по умолчанию не показана корзина
    cartUrl: '/getBasket.json',
    catalogUrl: '/catalogData.json',
    products: [], // каталог
    cartItems: [], // корзина
    filtered: [], // фильтр каталога
    imgCatalog: 'https://placehold.it/200x150',
    imgCart: 'https://placehold.it/50x100',
  },
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
    addProduct(product) { // добавление товара в корзину или колличество если он уже есть
      this.getJson(`${API}/addToBasket.json`)  // идем на сервер и добавляем в cartItems
          .then(data => {
            if (data.result === 1) { // ответ сервера
              let find = this.cartItems.find(el => el.id_product === product.id_product); // если есть
              if (find) {
                find.quantity++; // то меняем колличество
              } else {
                let prod = Object.assign({quantity: 1}, product);
                this.cartItems.push(prod) // добавляем в cartItems
              }
            } else {
              alert('Error');
            }
          })
    },
    remove(item) { // удаляем из корзины
      this.getJson(`${API}/deleteFromBasket.json`)
          .then(data => {
            if (data.result === 1) {  // проверяем наличие
              if (item.quantity > 1) {
                item.quantity--;  // убавляем колличество если > 1
              } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1)  // если последний элемент то удаляем
              }
            }
          })
    },

    filter() {  //фильтация
      let regexp = new RegExp(this.userSearch, 'i'); // регистонезависимый поиск
      this.filtered = this.products.filter(el => regexp.test(el.product_name)); // фильтруем и кладем в filtred в <main>
    },
  },


  mounted() { // метод запуска как загрузится приложение
    this.getJson(`${API + this.cartUrl}`)
        .then(data => {
          for (let el of data.contents) {
            this.cartItems.push(el);
            this.filtered.push(el);
          }
        });

    console.log('mounted');
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            this.products.push(el);
          }
        });
  },
});
