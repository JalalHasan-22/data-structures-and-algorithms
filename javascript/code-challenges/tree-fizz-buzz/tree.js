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

  fizzBuzzTree = (tree) => {
    const result = [];
    if (tree.root) {
      const newTree = new kTree(tree.root);
      const q = new Queue();
      q.enqueue(newTree.root);
      while (!q.isEmpty()) {
        if (q.front.value.value % 15 === 0) q.front.value.value = "FizzBuzz";
        else if (q.front.value.value % 5 === 0) q.front.value.value = "Buzz";
        else if (q.front.value.value % 3 === 0) q.front.value.value = "Fizz";
        else {
          q.front.value.value = q.front.value.value.toString();
        }
        for (let child of q.front.value.children) {
          q.enqueue(child);
        }
        result.push(q.dequeue().value);
      }
      return newTree;
    } else {
      return "empty tree";
    }
  };
}
module.exports = { kTree, treeNode };
