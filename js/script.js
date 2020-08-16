"use strict";
function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
function numValidate  (message, errorMessage)  {
  let output = prompt(message);
  if (!isNumber(output)) {
    do {
      output = prompt(errorMessage);
    } while (!isNumber(output));
  }
  return +output;
};
function stringValidate  (message, errorMessage)  {
  let output = prompt(message);
  if (isNumber(output) || output === '' || output === null) {
    do {
      output = prompt(errorMessage);
    } while (isNumber(output) || output === '' || output === null);
  }
  return output;
};
let
  startButton = document.getElementById('start'),
  incomeAddBtn = document.getElementsByTagName('button')[0],
  expensesAddBtn = document.getElementsByTagName('button')[1],
  depositCheck = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
  expensesItems = document.querySelectorAll('.expenses-items'),
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
  targetMonthValue = document.getElementsByClassName('target_month-value')[0],
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
  expensesTitle = document.querySelector('.expenses-title'),
  salaryAmount = document.querySelector('.salary-amount'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  incomeItems = document.querySelectorAll('.income-items');


periodSelect.oninput = function () {
  periodAmount.innerHTML = periodSelect.value;
}
if (salaryAmount.value === '') {
  startButton.disabled = true;
}

let appData = {
  budget: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
    appData.budget = salaryAmount.value;
    
    appData.getExpenses();
    appData.getIncome();
    // appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.showResult();
    // appData.getStatusIncome();
    // appData.getInfoDeposit();
    // appData.showAddExpenses();
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.floor(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth(); 
    incomePeriodValue.value = appData.calcSavedMoney();
    periodSelect.addEventListener('input', function () {
      incomePeriodValue.value = appData.calcSavedMoney();
    });
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddBtn);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesAddBtn.style.display = 'none';
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAddBtn);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 2) {
      incomeAddBtn.style.display = 'none';
    }
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = +cashExpenses;
      }
    }); 
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = +cashIncome;
      }
      for (let key in appData.income) {
        appData.incomeMonth += +appData.income[key];
      }
    })
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (item !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },
  
  getExpensesMonth: function () {
  
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = (+appData.budget + appData.incomeMonth) - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.floor(targetAmount.value / appData.budgetMonth);
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
    return appData.budgetMonth * periodSelect.value;
  }
};

startButton.addEventListener('click', appData.start)
expensesAddBtn.addEventListener('click', appData.addExpensesBlock);
incomeAddBtn.addEventListener('click', appData.addIncomeBlock);


// console.log('Бюджет на месяц: ' + appData.budgetMonth);
// console.log('Бюджет на день: ' + appData.budgetDay);

// console.log('Расходы на месяц: ' + appData.expensesMonth);
// console.log(appData.getTargetMonth());
// console.log('Наша программа включает в себя данные:')
// appData.showAllObj();
