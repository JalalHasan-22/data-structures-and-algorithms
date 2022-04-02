"use strict";

const Node = require("./node");

class binaryTree {
  constructor(root = null) {
    this.root = root;
  }

  //Define a method for each of the depth first traversals
  // Pre-Order method ==> root, left, rigth
  preOrder() {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  //Second Traversal
  // In-Order method ==> left, root, right
  inOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // Third Traversal
  // Post-Order method ==> left, rigth, root
  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

class bst extends binaryTree {
  constructor(root = null) {
    super();
    this.root = root;
  }
  add(value) {
    const newNode = new Node(value);
    let currentNode = this.root;
    if (currentNode === null) {
      this.root = newNode;
      return;
    } else {
      const traverse = (currentNode) => {
        if (newNode.value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return;
          } else if (currentNode.left !== null) {
            return traverse(currentNode.left);
          }
        } else if (newNode.value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return;
          } else if (currentNode.right !== null) {
            return traverse(currentNode.right);
          }
        } else {
          return null;
        }
      };
      return traverse(currentNode);
    }
  }
}

module.exports = { binaryTree, bst };
