'use strict';

const numbersArray = [1, 2, 3, 4, 5];

function callback(currentValue) {
  console.log((currentValue *= 2));
}

function addSubscribe(user) {
  user.isSubscribed = true;
}

numbersArray.forEach(callback);

userArray.forEach(addSubscribe);