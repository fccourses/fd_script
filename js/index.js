'use strict';

function User(firstName, lastName, age, isMale, isSubscribed = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
}



