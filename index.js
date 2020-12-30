'use strict';

/* 

Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. 
Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего,
 что ввёл пользователь при вызовах метода read(),
  с учётом начального значения startingValue.

*/

function Accumulator(startingValue) {
  this.read = function read() {
    const userNumber = +prompt('Enter number');
    if (this.checkNumber(userNumber)) {
      return null;
    }
    this.value += userNumber;
    return this.value;
  };

  this.checkNumber = function (number) {
    return isNaN(number) || number < 0;
  };

  if (this.checkNumber(startingValue)) {
    return null;
  }
  this.value = startingValue;
}
