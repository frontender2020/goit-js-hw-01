'use strict';

// ввод двнных в модальном окне

/*
const ordered = prompt('Введите нужное количество товара');

const total = 100;

if (ordered > 0 && ordered <= 100) {
  alert('Заказ оформлен, с вами свяжется менеджер');
} else if (ordered > 100) {
  alert('На складе недостаточно товаров!');
} else {
  alert('Заказ выполнить невозможно');
} 
*/

// вывод данных в консоль

const ordered = 50;

const total = 100;

if (ordered > 0 && ordered <=100) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else if (ordered > 100) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('заказ выполнить невозможно');
}

