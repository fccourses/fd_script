'use strict';

function sum(a, b) {
  return a + b;
}

function withLog(func) {
  return function (...args) {
    const result = func(...args);
    console.log(result);
    return result;
  };
}

const sumWithLog = withLog(sum);

sumWithLog(2,8);

