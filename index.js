'use strict';

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function highOrderFunc(num1, num2, funcToPerformOperation) {
  const result = funcToPerformOperation(num1, num2);
  return result;
}

const res1 = highOrderFunc(10, 20, subtract);

console.log(res1);
