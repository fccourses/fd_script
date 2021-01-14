class MyArray {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      ++this.length;
    }
    return this.length;
  }

  forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  }

  concat(myArrayInstance) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < myArrayInstance.length; i++) {
      result.push(myArrayInstance[i]);
    }

    return result;
  }

  flat(depth = 1) {
    let result = new MyArray();

    /*  
   for (let i = 0; i < this.length; i++) {
      if (MyArray.isMyArray(this[i]) && depth > 0) {
        result = result.concat(this[i].flat(depth - 1));
      } else if (this[i] !== undefined) {
        result.push(this[i]);
      }
    } */

    this.forEach((item) => {
      if (MyArray.isMyArray(item) && depth > 0) {
        result = result.concat(item.flat(depth - 1));
      } else if (item !== undefined) {
        result.push(item);
      }
    });

    return result;
  }

  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
}

class Friend {
  /**
   *
   * @param {number} count
   * @param {Friend[]} friends
   */
  constructor(count = 0, friends = []) {
    this.count = count;
    this.friends = friends;
  }

  getCount() {
    if (this.friends.length) {
      return this.friends.reduce(
        (result, friend) => result + friend.getCount(),
        this.count
      );
    }
    return this.count;
  }
}

const friend = new Friend(10, [
  new Friend(5),
  new Friend(5, [
    new Friend(5),
    new Friend(5),
    new Friend(5, [
      new Friend(5),
      new Friend(5),
      new Friend(5),
      new Friend(5),
      new Friend(7),
    ]),
  ]),
  new Friend(5, [
    new Friend(5),
    new Friend(5, [
      new Friend(5),
      new Friend(5),
      new Friend(1),
      new Friend(5),
      new Friend(5),
    ]),
    new Friend(5),
    new Friend(5),
    new Friend(5),
  ]),
  new Friend(1000),
]);
