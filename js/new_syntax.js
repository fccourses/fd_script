'use strict';
const MIN_ZP = 5000 / 30;

class User {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  get fullName() {
    return `${this.name} ${this.surName}`;
  }

  set fullName(newFullName) {
    if (typeof newFullName !== 'string') {
      throw new TypeError('Name must be a string');
    }

    const nameArray = newFullName.split(' ');

    this.name = nameArray[0];
    this.surName = nameArray[1];
  }

  get isAdult() {
    return this.age >= 18;
  }

  /* Сделать isAdult статичным методом */

  static isUser(obj) {
    return obj instanceof User;
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

class Fuel {
  /**
   *
   * @param {number} volume
   * @param {number} density
   */
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }

  set volume(v) {
    // setter
    if (typeof v !== 'number') {
      throw new TypeError('Data must be a numbers');
    }
    this._volume = v;
  }

  get volume() {
    // getter
    return this._volume;
  }

  set density(v) {
    if (typeof v !== 'number') {
      throw new TypeError('Data must be a numbers');
    }
    this._density = v;
  }

  get density() {
    return this._density;
  }

  get weight() {
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
