'use strict';

// append - вставить в конец родителя
// prepend - вставляет в начало родителя
// before - вставляет перед элементом который указали
// after - вставляет после элемента который указали

// replaceWIth - вместо элемента ставится который указали

// .cloneNode() - копирует лишь тег и его данные
// .cloneNode(true) - копирует элемент полностью

// textContent - добавляет текст 
// document.createElement(tag) - создает элемент(тэг)

const books = document.querySelectorAll('.book'),
      elem = document.querySelectorAll('a'),
      adv = document.querySelector('.adv'),
      elem2 = document.querySelectorAll('li'),
      newElem = document.createElement('li');

books[1].after(books[0]);
books[3].before(books[4]);
books[5].after(books[2]);

document.body.style.backgroundImage = 'url(../image/you-dont-know-js.jpg)';

elem[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

elem2[3].after(elem2[6]);
elem2[4].before(elem2[8]);

elem2[47].after(elem2[55]);
elem2[55].after(elem2[49]);
elem2[49].after(elem2[50]);
newElem.textContent = "Глава 8: За пределами ES6"
elem2[25].append(newElem);