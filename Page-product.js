"use strict";

//ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ (СОХРАНЕНИЕ, ВЫВОД КОЛИЧЕСТВА В КОРЗИНУ)

// Инициализация числа товаров в корзине, включая проверку в localStorage
let goodsCountInCart = localStorage.getItem('goodsCountInCart') ? Number(localStorage.getItem('goodsCountInCart')) : 0;
console.log('goodsCountInCart - Начальное значение', goodsCountInCart)

// Инициализация переменных для html-элементов
const cartIndicator = document.querySelector('#product-header__basket-count');

const cartButton = document.querySelector('#product-buy__btn');
const cartButtonText = document.querySelector('#product-buy__btn-text');

// Сценарий 1: товар уже был добавлен, его нужно удалить - При первой загрузке, из-за непустого localStorage
if (goodsCountInCart === 1) {
  cartIndicator.innerHTML = goodsCountInCart;
  cartIndicator.classList.toggle('product-header__basket-count-active');

  cartButtonText.innerHTML = 'Товар уже в корзине';
  cartButton.classList.add('product-buy__btn-added');
}

// Обработка клика по кнопке Добавить в корзину/Удалить из корзины
cartButton.addEventListener('click', () => {
  console.log('goodsCountInCart - Значение при клике', goodsCountInCart)

  // Сценарий 1: товар уже был добавлен, его нужно удалить
  if (goodsCountInCart === 1) {
    console.log('Сценарий 1: товар уже был добавлен, его нужно удалить');

    goodsCountInCart = 0;
    localStorage.removeItem('goodsCountInCart');

    cartIndicator.innerHTML = '';
    cartIndicator.classList.toggle('product-header__basket-count-active');

    cartButton.classList.toggle('product-buy__btn-added');
    cartButtonText.innerHTML = 'Добавить в корзину';
  } 
  
  // Сценарий 2: товар еще не был добавлен, его нужно добавить
  else {
    console.log('Сценарий 2: товар еще не был добавлен, его нужно добавить');

    goodsCountInCart = 1;
    localStorage.setItem('goodsCountInCart', goodsCountInCart);

    cartIndicator.innerHTML = goodsCountInCart;
    cartIndicator.classList.toggle('product-header__basket-count-active');

    cartButton.classList.toggle('product-buy__btn-added');
    cartButtonText.innerHTML = 'Товар уже в корзине';
  }
});

//ДОБАВЛЕНИЕ ТОВАРА В ИЗБРАННОЕ (СОХРАНЕНИЕ, ВЫВОД КОЛИЧЕСТВА В ИЗБРАННОЕ)

// Инициализация числа товаров в корзине, включая проверку в localStorage
let goodsCountInHeart = localStorage.getItem('goodsCountInHeart') ? Number(localStorage.getItem('goodsCountInHeart')) : 0;
console.log('goodsCountInHeart - Начальное значение', goodsCountInHeart)

// Инициализация переменных для html-элементов
const heartIndicator = document.querySelector('#product-header__heart-count');

const heartButton = document.querySelector('#product__buy-favorites');
const heartButtonLike = document.querySelector('#product__buy-favorites_like');

// Сценарий 1: товар уже был добавлен, его нужно удалить - При первой загрузке, из-за непустого localStorage
if (goodsCountInHeart === 1) {
  heartIndicator.innerHTML = goodsCountInHeart;
  heartIndicator.classList.toggle('product-header__heart-count-active');

  heartButtonLike.innerHTML = '';
  heartButton.classList.add('product__buy-favorites-added');
}

// Обработка клика по кнопке Добавить в корзину/Удалить из корзины
heartButton.addEventListener('click', () => {
  console.log('goodsCountInHeart - Значение при клике', goodsCountInHeart)

  // Сценарий 1: товар уже был добавлен, его нужно удалить
  if (goodsCountInHeart === 1) {
    console.log('Сценарий 1: товар уже был добавлен, его нужно удалить');

    goodsCountInHeart = 0;
    localStorage.removeItem('goodsCountInHeart');

    heartIndicator.innerHTML = '';
    heartIndicator.classList.toggle('product-header__heart-count-active');

    heartButton.classList.toggle('product__buy-favorites-added');
    heartButtonLike.innerHTML = '';
  } 
  
  // Сценарий 2: товар еще не был добавлен, его нужно добавить
  else {
    console.log('Сценарий 2: товар еще не был добавлен, его нужно добавить');

    goodsCountInHeart = 1;
    localStorage.setItem('goodsCountInHeart', goodsCountInHeart);

    heartIndicator.innerHTML = goodsCountInHeart;
    heartIndicator.classList.toggle('product-header__heart-count-active');

    heartButton.classList.toggle('product__buy-favorites-added');
    heartButtonLike.innerHTML = '';
  }
});

//ОТПРАВКА ФОРМЫ ОТЗЫВА (ОШИБКИ, СОХРАНЕНИЕ)

// Инициализация переменных
let reviewForm = document.getElementById('product-form');
let reviewFormName = document.getElementById('product-review__name');
let reviewFormNameError = document.querySelector('.form-review__name-error');
let reviewFormGrade = document.getElementById('product-review__grade');
let reviewFormGradeError = document.querySelector('.form-review__grade-error');

console.log (reviewForm);
console.log (reviewFormName);
console.log (reviewFormNameError);
console.log (reviewFormGrade);
console.log (reviewFormGradeError);

let nameErrorStr = '';
let gradeErrorStr = '';

// Инициализация полей, исходя из содержимого localStorage
if (localStorage.getItem('reviewName')) {
  reviewFormName.value = localStorage.getItem('reviewName')
}

if (localStorage.getItem('reviewGrade')) {
  reviewFormGrade.value = localStorage.getItem('reviewGrade')
}

// Обработка изменений полей, запись в localStorage
reviewFormName.addEventListener('input', (e) => {
  localStorage.setItem('reviewName', e.target.value)
  console.log(e.target.value)
})

reviewFormGrade.addEventListener('input', (e) => {
  localStorage.setItem('reviewGrade', e.target.value)
})

// Обработка отправки формы
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Форма была отправлена ​​с js');
  console.log('Имя и фамилия:', reviewFormName.value);
  console.log('Оценка', reviewFormGrade.value);

  // Формирование строки Ошибки имени
  if (reviewFormName.value === '') {
    nameErrorStr = 'Вы забыли указать имя и фамилию';
  } else if (reviewFormName.value.length <= 3) {
    nameErrorStr = 'Имя не может быть короче двух символов';
  } else {
    nameErrorStr = '';
  }
    console.log(nameErrorStr);

  // Формирование строки Ошибки оценки
  if (reviewFormGrade.value === '') {
    gradeErrorStr = 'Поле не заполнено: Оценка должна быть от 1 до 5';
  } else if (!reviewFormGrade.value.match(/^\d+$/)) {
    gradeErrorStr = 'В поле введены буквы: Оценка должна быть от 1 до 5';
  } else if (!reviewFormGrade.value.match(/^[1-5]$/)) {
    gradeErrorStr = 'Вы ввели цифры больше 5 или меньше 1: Оценка должна быть от 1 до 5';
  } else {
    gradeErrorStr = '';
  }
    console.log(gradeErrorStr);

  // Добавление/удаление стилей и контента для Ошибки имени
  if (nameErrorStr) {
    reviewFormNameError.innerHTML = nameErrorStr;
    reviewFormNameError.classList.add('form-review__name-error-active');
  } else {
    reviewFormNameError.innerHTML = '';
    reviewFormNameError.classList.remove('form-review__name-error-active');
  }

  // Добавление/удаление стилей и контента для Ошибки оценки
  if (!nameErrorStr && gradeErrorStr) {
    reviewFormGradeError.innerHTML = gradeErrorStr;
    reviewFormGradeError.classList.add('form-review__grade-error-active');
  } else {
    reviewFormGradeError.innerHTML = '';
    reviewFormGradeError.classList.remove('form-review__grade-error-active');
  }

  if (!nameErrorStr && !gradeErrorStr) {
    reviewFormName.value = '';
    reviewFormGrade.value = '';

    localStorage.removeItem('reviewName');
    localStorage.removeItem('reviewGrade');
  }
})