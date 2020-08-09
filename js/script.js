"use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
// Переменные
let money,
  income = 'фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
	period = 4;
const start = function () {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
  return money;
};
start();
// Обязательные расходы
const expenses = [];

const showTypeOf = function (data) {
  console.log(typeof(data))
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);  
const getExpensesMonth = function () {
  let sum = 0,
      amount = 0;

  for (let i = 0; i < 4; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов?')
    do {
      amount = prompt('Во сколько это обойдется?');
    } while (!isNumber(amount));
    sum += +amount;
  }
  console.log(expenses);
  return sum;
};
const expensesAmount = getExpensesMonth();
const getAccumulatedMonth = function () {
  return money - expensesAmount;
};
const accumulatedMonth = getAccumulatedMonth();
const getTargetMonth = function () {
  return Math.floor(mission / accumulatedMonth);
};
const budgetDay = Math.floor(accumulatedMonth / 30);
const getStatusIncome = function() {
  if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (budgetDay > 600) {
    console.log("У вас средний уровень дохода");
  } else if (budgetDay <= 600 && budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  } if (budgetDay === 0 || budgetDay < 0) {
    console.log("Что то пошло не так :(");
  }
};
getStatusIncome();
// Методы и свойства
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);
if (+getTargetMonth() > 0) {
  console.log('Цель будет достигнута через:' + getTargetMonth());
} if(+getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
}
console.log(getTargetMonth());
console.log('Расходы за месяц:' + expensesAmount);
console.log(accumulatedMonth);