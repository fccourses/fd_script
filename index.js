'use strict';

const user = {
  firstName: 'test',
  lastName: 'testovich',
  age: 5,
  isMale: true,
};

function sayHello(userObj) {
  if (userObj.age >= 18) {
    return `Hello, ${userObj.firstName} ${userObj.lastName} !!!`;
  }
  return `Goodbye, ${userObj.lastName}!`;
}

console.log(sayHello(user));
