'use strict';

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
function User(firstName, lastName, age, isMale, isSubscribed = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
  this.getFullName = getFullName;
}
function createRandomUsers(amount = 1) {
  const db = [];

  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i + 1}`,
      `Surname${i + 1}`,
      Math.ceil(Math.random() * 100),
      Math.random() > 0.5
    );
    db.push(user);
  }
  return db;
}
const users = createRandomUsers(100);
/* Получить массив полных имён с помощью метода map */
const getNames = function (user) {
  return user.getFullName(); // Full Name
};

const userNames = users.map(getNames);

/* Получить массив совершеннолетних пользователей (filter) */

const adultUsers = users.filter(function (user) {
  return user.age >= ADULT_AGE;
});

console.table(adultUsers);

/* 1.1 Зарандомить подписку для каждого пользователя.
  1.2Получить массив совершеннолетних пользователей 
женского пола.
  2.1 Добавить Почту для пользователей.
  2.2 Как 1.2, но только их почты.
*/
