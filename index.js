'use strict';

let count = 0;

while (true) {
  count++;

  if (count % 2 === 1) {
    continue;
  }

  console.log(count);

  if (count > 10) {
    break;
  }
}
