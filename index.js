'use strict';

const result = sum(5, 3);

console.log(result);

function sum(a, b) {
  return a + b;
}

function mul(a, b) { //чистая функция
  return a * b;
}

function square(n) { // тоже чистая функция. 
  const res = mul(n, n);
  return res;
}
