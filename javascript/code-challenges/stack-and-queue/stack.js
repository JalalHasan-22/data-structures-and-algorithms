"use strict";

const LinkedList = require("./linkedList");

class Stack {
  constructor() {
    this.storage = new LinkedList();
    this.top = null;
  }

  push(value) {
    this.storage.insert(value);
    this.top = value;
  }

  pop() {
    const result = this.storage.retreive();
    this.top = this.storage.head.value;
    return result;
  }

  peek() {
    return this.storage.head.value;
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

module.exports = Stack;
