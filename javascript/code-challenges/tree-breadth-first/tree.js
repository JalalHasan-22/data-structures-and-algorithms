"use strict";

const Queue = require("./queue");

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class binaryTree {
  constructor(root = null) {
    this.root = root;
    this.queue = new Queue();
  }

  breadthFirst() {
    const result = [];
    this.queue.enqueue(this.root);

    while (!this.queue.isEmpty()) {
      if (this.queue.front.value.left !== null)
        this.queue.enqueue(this.queue.front.value.left);
      if (this.queue.front.value.right !== null)
        this.queue.enqueue(this.queue.front.value.right);
      result.push(this.queue.dequeue().value);
    }
    return result;
  }
}

module.exports = { binaryTree, Node };
