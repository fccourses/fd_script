'use strict';

const user = {
  'favorite color': 'red',
  0: 'test value',
  1: 'test value 2',
};

// alert(user.favorite color);

console.log(user[0]);
console.log(user['0']);

const test = '1';

console.log(user[test]);

