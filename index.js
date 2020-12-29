'use strict';

/* Создаём прототип для MyArray(тут будет храниться логика) */
function MyArrayProto() {
  /* Уже создан пустой новый объект (this) */
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      ++this.length;
    }
    return this.length;
  };

  this.pop = function pop() {
    if (this.length <= 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
}

/* Создаем MyArray */
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
MyArray.prototype = new MyArrayProto(); // создаём связь между объектами(Наследование)

// this - ссылка на объект, который вызывает метод.
const myArr = new MyArray(1, 2, 3, 4, 5, 'str', false, {}); // не работает
const arr = new Array(1, 2, 3, 4, 5, 6, 67, 7, 87); //работает

const nativeArray = [];

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
  if (isNaN(startingValue)) {
    return null;
  }
  this.value = startingValue;

  this.read = function read() {
    const userNumber = +prompt('Enter number');
    if (isNaN(userNumber)) {
      return null;
    }
    this.value += userNumber;
    return this.value;
  };
}
