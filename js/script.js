'use strict';

const startButton = document.getElementById('start'),
      incomeAddButton = document.getElementsByTagName('button'[0]),
      expensesAddButton = document.getElementsByTagName('button'[1]),
      depositCheck = document.querySelector('#deposit-check'),
      additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      budgetDayValue = document.getElementByClassName('budget_day-value'),
      expensesMonthValue = document.getElementByClassName('expenses_month-value'),
      additionalIncomeValue = document.getElementByClassName('additional_income-value'),
      additionalExpensesItem = document.getElementByClassName('additional_expenses-item'),
      incomePeriodValue = document.getElementByClassName('income_period-value'),
      targetMonthValue = document.getElementByClassName('target_month-value'),
      targetAmount = document.querySelector('.target-amount'),
      periodSelect = document.querySelector('.period-select'),
      expensesTitle = document.querySelector('.expenses-title'),
      expensesAmount = document.querySelector('.expenses-amount'),
      incomeTitle = document.querySelector('.income-title'),
      incomeAmount = document.querySelector('.income-amount');

