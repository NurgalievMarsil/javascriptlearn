"use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
},
      guessTheNumber = () => {
        let number = Math.floor(Math.random() * 10) + 1;
        alert('Угадай число от 1 до 100');
        const count = 10;
        function checkType() {
          let userNumber = prompt('Введи число');
          function checkNumber() {
            if (+userNumber > number) {
              alert('Загаданное число меньше');
              checkType();
            } else if (+userNumber < number) {
              alert('Загаданное число больше');
              checkType();
            } else {
              alert('Вы угадали!');
              if (confirm('Сыграем еще?')) {
                guessTheNumber();
              }
            }
          }
          checkNumber();
          if (!isNumber(userNumber) || userNumber === '' || userNumber === null) {
            alert('Введи число!');
            checkType();
          } else {
            checkNumber();
          }
        }
        checkType();
      };








guessTheNumber();