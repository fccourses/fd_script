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
const sum = (...args) => {
  return args.reduce((result, value) => {
    return result + value;
  });
};
