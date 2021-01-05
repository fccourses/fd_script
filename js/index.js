'use strict';

function User(firstName, lastName, age, isMale, isSubscribed = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
}

function createRandomUsers(amount = 1) {
  const db = [];

  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i+1}`,
      `Surname${i+1}`,
      Math.ceil(Math.random() * 100),
      Math.random() > 0.5
    );
    db.push(user);
  }

  return db;
}
