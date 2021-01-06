'use strict';

function countDown(startValue) {
  debugger;
  console.log(startValue);
  if (startValue > 0) {
    countDown(startValue - 1); // рекурсия
  }
  return true; // база 
}

/*
Этапы рекурсии:
  1) Происходит рекурсивный вызов функций
  2) Доходим до базы
  3) Все в call stack заканчивают свою работу
*/
