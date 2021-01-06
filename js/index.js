'use strict';

const test = () => {
  console.log(arguments); // arguments в стрелках нету
};
const test2 = function () {
  console.log(arguments);
};
console.dir(test);
console.dir(test2);

// test();

function sum() {
  let res = null;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}
const r = sum(1, 2, 1, 123, 14, 343, 413, 413);
