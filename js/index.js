'use strict';
function test(a, b) {
  console.log(arguments);
  console.log(a, b);
}

function test2(a, b, ...args) {
  // ... - rest operator
  console.log(a, b);
  console.log(args);
}
/*
Стрелочная функция суммирования 
бесконечного кол-ва чисел 
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = [10, 12, 1435, 345, 345, 346, 8];
/* Склеить два массива без concat */
const res = [...numbers, ...numbers2]; //concat без concat

const sum = (...args) => {
  /*  
 VERSION 1
 let acc = null;

  args.forEach((element) => {
    acc += element;
  }); 

  return acc;*/

  return args.reduce((result, value) => result + value);
};

console.log(sum(...numbers)); //spread(разбор) оператор.
sum(...numbers2, ...numbers);
