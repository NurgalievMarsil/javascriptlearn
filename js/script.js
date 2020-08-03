"use strict";

// Переменные
const money = +prompt('Ваш месячный доход?'),
  income = 'фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
	period = 4;

// Обязательные расходы
const expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = +prompt('Во сколько это обойдется?');

const showTypeOf = function (data) {
  console.log(typeof(data))
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);  
const getExpensesMonth = function () {
  return amount1 + amount2;
};
const getAccumulatedMonth = function () {
  return money - getExpensesMonth();
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
console.log(getTargetMonth());
console.log(getExpensesMonth());
console.log(accumulatedMonth);