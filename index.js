'use strict';

//Создали объект кота
const cat = {
  color: 'black',
  breed: 'Spinx',
  age: 8,
  isMale: true,
  name: 'Kasya',
};

console.log(cat);
cat.age = cat.age + 1; // изменили существующее свойство на основе старого значения
console.log(cat);
cat.name = 'Test Testovich'; // изменили существующее свойство
console.log(cat);
cat.amountOfLegs = 4; // создали новое свойство
console.log(cat);

delete cat.amountOfLegs // delete property
console.log(cat);
