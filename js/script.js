"use strict";
const
  isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  numValidate = (message, errorMessage) => {
    let output = prompt(message);
    if (!isNumber(output)) {
      do {
        output = prompt(errorMessage);
      } while (!isNumber(output));
    }
    return +output;
  },

  stringValidate = (message, errorMessage) => {
    let output = prompt(message);
    if (isNumber(output) || output === '' || output === null) {
      do {
        output = prompt(errorMessage);
      } while (isNumber(output) || output === '' || output === null);
    }
    return output;
  };

let money,
    start = function () {
      do {
        money = prompt('Ваш месячный доход?');
      } while (!isNumber(money));
      return money;
    };


let appData = {
  budget: +start(),
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 4,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {

    if (confirm('Есть ли у вас дополнительный заработок?')) {
      let itemIncome = stringValidate('Какой у вас дополнительный заработок?', 'Данные должны быть строкой! Какой у вас дополнительный заработок?');
      let cashIncome = numValidate('Сколько в месяц вы на этом зарабатываете?', 'Данные должны быть числом! Сколько в месяц вы на этом зарабатываете?');
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
      expensesName,
      expensesCost;
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
  
      expensesName = stringValidate('Введите обязательную статью расходов?', 'Данные должны быть строкой! Введите обязательную статью расходов?')
      do {
        expensesCost = numValidate('Во сколько это обойдется?', 'Данные должны быть числом! Во сколько это обойдется?');
      } while (!isNumber(expensesCost));
      appData.expenses[expensesName] = +expensesCost;
    }
  },
  getExpensesMonth: function () {
  
    for (let key in appData.expenses) {
      appData.expensesMonth +=appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.floor(appData.mission / appData.budgetMonth);
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
  showAddExpenses: () => {
    const arr = [];
    appData.addExpenses.forEach(item => {
      arr.push(item[0].toUpperCase() + item.substr(1));
    });
    return arr.join(', ');
  },
  showAllObj: () => {
    for (let key in appData) {
      if (typeof appData[key] !== 'function') {
        console.log(key + ': ', appData[key]);
      }
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = numValidate('Какой годовой процент?', 'Данные должны быть числом! Какой годовой процент?');
      appData.moneyDeposit = numValidate('Какая сумма заложена?', 'Данные должны быть числом! Какая сумма заложена?');
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();
console.log(appData.showAddExpenses());

console.log('Бюджет на месяц: ' + appData.budgetMonth);
console.log('Бюджет на день: ' + appData.budgetDay);

console.log('Расходы на месяц: ' + appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log('Наша программа включает в себя данные:')
appData.showAllObj();
