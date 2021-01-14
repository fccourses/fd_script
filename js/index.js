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

const myArr = new MyArray(
  0,
  0,
  0,
  0,
  new MyArray(1, 1, 1, 1, 1, new MyArray(2, 2, 2, 2, 2))
);

const arr = [0, 0, , , , , , , , , 0, [1, 1, 1, [2, 2, 2, [3, 3, 3, 3]]]];
