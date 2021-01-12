'use strict';
const MIN_ZP = 5000 / 30;

class User {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.surName}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

class Worker {
  constructor(name, surName, days = 0, rate = MIN_ZP) {
    this.name = name;
    this.surName = surName;
    this.days = days;
    this.rate = rate;
  }

  getSalary() {
    return this.days * this.rate;
  }
}

/* Auto */
/* Fuel */

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }
  getFuelWeight() {
    return this.volume * this.density;
  }
}

class Auto {
  /**
   *
   * @param {string} model
   * @param {number} weight
   * @param {Fuel} fuel - fuel of auto
   */
  constructor(model, weight, fuel) {
    this.model = model;
    this.ownWeight = weight;
    this.fuel = fuel;
  }
  getAutoWeight() {
    return this.ownWeight + this.fuel.getFuelWeight();
  }
}

const vw = new Auto('passat', 1350, new Fuel(40, 0.8));
