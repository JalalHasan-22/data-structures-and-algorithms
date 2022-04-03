"use strict";

class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

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
      this.rear.prev = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.front) return;
    else {
      const output = this.front.value;
      this.front = this.front.prev;
      if (this.front) this.front.next = null;
      this.length--;
      return output;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    return this.front.value;
  }

  // for visual testing purposes only
  toString() {
    let outputStr = "";
    let currentNode = this.front;
    while (currentNode) {
      outputStr += `${currentNode.value}` + `${currentNode.prev ? " => " : ""}`;
      currentNode = currentNode.prev;
    }
    return console.log(outputStr);
  }
}

module.exports = Queue;
