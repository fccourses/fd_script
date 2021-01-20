class Stack {
  constructor(maxSize = 1000, ...args) {
    this._maxSize = maxSize;
    this._size = 0;

    for (const item of args) {
      this.push(item);
    }
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  push(value) {
    if (this._size >= this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this[`_${this._size++}`] = value;
    return this._size;
  }

  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${--this._size}`];
    delete this[`_${this._size}`];
    return lastItem;
  }

  pick() {
    if (this.isEmpty) {
      return;
    }

    return this[`_${this._size - 1}`];
  }
}

const options = {
  braces: {
    '(': ')',
    '[': ']',
    '{': '}',
  },
  isStrict: false,
};

const checkSequence = (str, { braces, ...options }) => {
  const stack = new Stack();
  const closeBracesArray = Object.values(braces);

  for (const symbol of str) {
    if (braces[symbol]) {
      stack.push(symbol);
      continue;
    }

    if (stack.isEmpty && closeBracesArray.includes(symbol)) {
      return false;
    }

    if (braces[stack.pick()] === symbol) {
      stack.pop();
    }
  }
  return stack.isEmpty;
};

checkSequence('()', options);
