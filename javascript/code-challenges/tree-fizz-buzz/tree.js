"use strict";

const Queue = require("../tree-breadth-first/queue");

class treeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class kTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirst = () => {
    const result = [];

    if (!this.root) return result;

    const q = new Queue();
    q.enqueue(this.root);

    while (!q.isEmpty()) {
      const node = q.dequeue();

      result.push(node.value);

      //   console.log(node.value, node.children.length);

      for (let child of node.children) {
        q.enqueue(child);
      }
    }
    return result;
  };
}
module.exports = { kTree, treeNode };
