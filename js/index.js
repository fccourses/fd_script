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

const numArr = [1, 2, 3, 4, 5, 6, 5, 243, 5, 7675, 67, 67, 453, 76];

const nativeResult = numArr.some(isEven);

console.log(nativeResult);

//=====SOME FOR MY ARRAY========

const myNumArr = new MyArray(1, 2, 3, 346, 457, 67, 63476, 547, 45);

const myResult = myNumArr.some(isOdd);

console.log(myResult);

//every
console.log(numArr.every(isEven)); // false
console.log(myNumArr.every(isEven)); // false

//filter

const filteredArr = numArr.filter(isEven);
console.log(filteredArr);

const myFilteredArr = myNumArr.filter(isEven);
console.log(myFilteredArr);



function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}
