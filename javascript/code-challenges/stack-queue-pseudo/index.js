"use strict";

const Stack = require("./stack");

class Queue {
  constructor() {
    this.storage1 = new Stack();
    this.storage2 = new Stack();
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    if (this.storage1.length === 0) this.storage1.push(value);
    else {
      while (this.storage1.length > 0) {
        this.storage2.push(this.storage1.pop());
      }
      this.storage1.push(value);
      while (this.storage2.length > 0) {
        this.storage1.push(this.storage2.pop());
      }
    }
    this.front = this.storage1.top.value;
    this.rear = this.storage1.bottom.value;
    this.length++;
  }

  dequeue() {
    const dequeued = this.storage1.pop();
    this.front = this.storage1.top.value;
    this.length--;
    return dequeued;
  }
}

module.exports = Queue;
