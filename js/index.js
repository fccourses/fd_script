'use strict';
// const userArray = new MyArray({}, {});

function addSubscribe(user) {
  user.isSubscribed = true;
}

function addFriend(user) {
  user.hasFriends = true;
}

console.table(userArray);

userArray.forEach(addSubscribe);
userArray.forEach(addFriend);

console.table(userArray);

//======SOME=================

const numArr = [1, 2, 3, 4, 5, 6];

const nativeResult = numArr.some(isEven);

console.log(nativeResult);

//=====SOME FOR MY ARRAY========

const myNumArr = new MyArray(1, 2);

const myResult = myNumArr.some(isOdd);

console.log(myResult);

//every
console.log(numArr.every(isEven)); // false
console.log(myNumArr.every(isEven)); // false

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}
