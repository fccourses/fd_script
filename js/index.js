'use strict';

// Деструктуризация - особый синтаксис создания переменных
// Деструктуризация объектов:
const auto = {
  color: 'red',
  model: 'toyota',
  year: 2010,
  countDoor: 4,
  engine: {
    volume: { value: 2 },
    type: 'ICE',
  },
};
// const autoColor = auto.color;
const {
  engine: {
    volume: { value },
  },
} = auto;

console.log(value);

const { model, year, ...restOfAuto } = auto;

// Деструктуризация массива:

const nums = [10, 20, 30, 4, 5];
const [firstNumber, , thirdNumber, , fifthNumber] = nums;
const [, sec, ...restOfNums] = nums;

// Деструктуризация входных параметров

function getAutoModel({ model, ...restOfCar }) {
  console.log(restOfCar);
  return model;
}

function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function getFullName2({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
