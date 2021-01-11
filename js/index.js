'use strict';

const userInput = prompt('Введите число');

console.log(square(userInput));

function square(a) {
  if( typeof a !== 'number' ){
   throw new TypeError('Тип не тот')
  }
  return a * a;
}
