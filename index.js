'use strict';

let count = 0;

while (count++ < 0) {
  console.log(count);
}

do {
  console.log('1');
} while (count++ < 0);
