/* 
  1. number - NaN, Infinity, numbers[]
  2. bool - true, false
  3. string - '', 'a-zA-Z'
  5. undefined - undefined
  6. null - null
  7. BigInt - 123n

  4. symbol - уникальное значение

  8. object - {*}
*/

const mySymbol = Symbol('Symbol.Iterator');

const object = {
  key: 'value',
  key1: 'value2',
  key2: 3,
  [mySymbol]: 'value',
};

const arr = [1, 2, 3, 4, 5];
const myArr = new MyArray(1, 2, 3, 4, 5);

console.log(...arr); // 1 iterator
// console.log(...myArr)

/*   2 iterator
for (const item of myArr) {
  console.log(item);
}
 */

function forOf(collection, cb) {
  const iterator = collection[Symbol.iterator]();
  while (true) {
    const result = iterator.next();

    if (result.done) {
      return;
    }

    cb(result.value);
  }
}
