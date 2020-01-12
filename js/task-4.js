const credits = 23580;

const pricePerDroid = 3000;

let numberOfDriods = prompt('Какое количество дроидов купить?');

let totalPrice = numberOfDriods * pricePerDroid;

let rest = credits - totalPrice;

if (numberOfDriods === false) {
  alert('Отменено пользователем!');
} else {
  alert(totalPrice);
}

if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(`Вы купили ${numberOfDriods} дроидов, на счету осталось ${rest} кредитов.`);
}

           
