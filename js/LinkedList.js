class LinkedListIterator {
  constructor(list) {
    this._list = list;
    this._currentItem = null;
  }
  next() {
    this._currentItem = this._currentItem
      ? this._currentItem.next
      : this._list.head;
    return {
      value: this._currentItem ? this._currentItem.value : undefined,
      done: !this._currentItem,
    };
  }
}

class ListItem {
  constructor(value) {
    this._value = value;
    this.prev = null;
    this.next = null;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
  }
}

class LinkedList {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;

    for (const item of args) {
      this.push(item);
    }
  }

  push(v) {
    const newItem = new ListItem(v);

    if (this.length === 0) {
      /* Длинна 0, значит голова и конец списка - один и тот же объект */
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }

    return ++this.length;
  }

  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

const list = new LinkedList(1, 2, 3, 4, 5, 'test string');
const arr = [...list];
