"use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
},
      guessTheNumber = () => {
        let number = Math.floor(Math.random() * 10) + 1;
        alert('Угадай число от 1 до 100');
        let count = 10;
        function checkType() {
          let userNumber = prompt('Введи число');
          function checkNumber() {
            if (count === 0) {
              if (confirm('Хотите сыграть еще?')) {
                guessTheNumber();
              } else {
                alert('Прощай..');
                guessTheNumber = null;
              }
            } 
            if (+userNumber > number) {
              count--;
              alert('Загаданное число меньше, осталось попыток :' + count);
              checkType();
            } else if (+userNumber < number) {
              count--;
              alert('Загаданное число больше, осталось попыток :' + count);
              checkType();
            } else {
              alert('Вы угадали!');
              if (confirm('Сыграем еще?')) {
                guessTheNumber();
              } else { 
                alert('Прощай..');
                guessTheNumber = null;
              }
            }
          }
          
          if (!isNumber(+userNumber) || userNumber === '') {
            checkType();
          } else if (userNumber === null) {
            return;
          } else {
            checkNumber();
          }
          checkNumber();
        }
        checkType();
      };








guessTheNumber();