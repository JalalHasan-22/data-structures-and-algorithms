"use strict";

const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      this.top.prev = newNode;
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.top) return "Exception";
    const popped = this.top;
    this.top = this.top.next;
    this.length--;
    return popped.value;
  }

  peek() {
    return this.top.value;
  }
}

module.exports = Stack;
