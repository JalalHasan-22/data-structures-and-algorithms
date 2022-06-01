"use strict";

const Node = require("./node");

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
    this.size = 0;
  }

  //Adding a new node to the tree
  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    } else {
      const travers = (node) => {
        if (newNode.value < node.value) {
          if (node.left === null) {
            node.left = newNode;
            return;
          } else {
            return travers(node.left);
          }
        } else if (newNode.value > node.value) {
          if (node.right === null) {
            node.right = newNode;
            return;
          } else {
            return travers(node.right);
          }
        }
      };
      travers(this.root);
    }

    return null;
  }

  // Traversing the tree
  // 1) Depth First traversal
  // a) pre-order
  // root => left => right
  preOrder() {
    const result = [];
    if (this.root === null) {
      return result;
    } else {
      const traverse = (node) => {
        result.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      };
      traverse(this.root);
    }
    return result;
  }

  //b) in-order
  // left => root => right
  inOrder() {
    const result = [];
    if (this.root === null) {
      return result;
    } else {
      const traverse = (node) => {
        if (node.left) traverse(node.left);
        result.push(node.value);
        if (node.right) traverse(node.right);
      };
      traverse(this.root);
    }

    return result;
  }

  postOrder() {
    const result = [];
    if (this.root === null) {
      return result;
    } else {
      const travers = (node) => {
        if (node.left) travers(node.left);
        if (node.right) travers(node.right);
        result.push(node.value);
      };
      travers(this.root);
    }
    return result;
  }

  // Breadth First (Width first) traversal
  breadthFirst() {
    const queue = [];
    const result = [];
    if (this.root === null) {
      return result;
    } else {
      queue.push(this.root);

      while (queue.length) {
        const currentNode = queue.shift();
        result.push(currentNode.value);
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
    return result;
  }
}

module.exports = BinarySearchTree;
