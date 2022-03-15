"use strict";

const LinkedList = require("./linkedList");

class Queue {
  constructor() {
    this.storage = new LinkedList();
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    this.storage.append(value);
    if (!this.front) this.front = value;
    this.back = value;
  }

  dequeue() {
    const result = this.storage.retreive();
    this.front = this.storage.head;
    return result;
  }

  peek() {
    return this.front;
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

module.exports = Queue;
