"use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money,
    start = function () {
      do {
        money = prompt('Ваш месячный доход?');
      } while (!isNumber(money));
      return money;
    };
  start();

let appData = {
  budget: money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 100000,
  period: 4,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
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
  },
  getAccumulatedMonth: function () {
    return money - expensesAmount;
  },
  getTargetMonth: function () {
    return Math.floor(appData.mission / accumulatedMonth);
  },
  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (appData.budgetDay > 600) {
      console.log("У вас средний уровень дохода");
    } else if (appData.budgetDay <= 600 && appData.budgetDay > 0) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    } if (appData.budgetDay === 0 || appData.budgetDay < 0) {
      console.log("Что то пошло не так :(");
    }
  },
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  }
};
appData.asking();
// Обязательные расходы
const expenses = [];

const expensesAmount = appData.getExpensesMonth();

const accumulatedMonth = appData.getAccumulatedMonth();

appData.getStatusIncome();
// Методы и свойства
console.log(appData.addExpenses.length);
console.log('Период равен ' + appData.period + ' месяцев');
console.log('Цель заработать ' + appData.mission + ' рублей');
if (+appData.getTargetMonth() > 0) {
  console.log('Цель будет достигнута через:' + appData.getTargetMonth());
} if(+appData.getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
}
console.log(appData.getTargetMonth());
console.log('Расходы за месяц:' + expensesAmount);
console.log(accumulatedMonth);