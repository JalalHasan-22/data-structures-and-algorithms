"use strict";

const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      newNode.prev = this.rear;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    this.rear = this.rear.prev;
    this.length--;
    return this.rear;
  }

  peek() {
    return this.front.value;
  }
}

module.exports = Queue;
