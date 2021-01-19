class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;

    for( const item of args){
      this.push(item);
    }
  }
  get size() {
    return this._tail - this._head;
  }

  push(value) {
    this[this._tail++] = value;
    return this.size;
  }

  pop() {
    const lastItem = this[this._head];
    delete this[this._head++];

    return lastItem;
  }
}

const q1 = new Queue(1, 3, 5);
const q2 = new Queue(2, 4, 6);

/* 
mergeQueues(q1, q2){}
Из двух очередей сделать одну. 
Но в результирующей очереди элементы должны чередоваться.
*/
