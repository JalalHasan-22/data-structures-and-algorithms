"use strict";

const Node = require("./node");

class binaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Depth First traversal methods

  // 1) pre-order traversal
  // Root ==> Left ==> Right

  preOrder() {
    if (!this.root) return null;
    const result = [];

    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // 2) in-order traversal
  // Left ==> Root ==> Right

  inOrder() {
    if (!this.root) return null;

    const result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    if (!this.root) return null;

    const result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  // Breadth First Traversal Method
  breadthFirst() {
    if (!this.root) return null;
    else {
      const result = [];
      const queue = [];

      queue.push(this.root);
      while (queue.length) {
        const currentNode = queue.shift();
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        result.push(currentNode.value);
      }
      return result;
    }
  }
}

class bst extends binaryTree {
  constructor(root = null) {
    super();
    this.root = root;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      const traverse = (node) => {
        if (newNode.value < node.value) {
          if (node.left) {
            return traverse(node.left);
          } else {
            node.left = newNode;
            return;
          }
        } else if (newNode.value > node.value) {
          if (node.right) {
            return traverse(node.right);
          } else {
            node.right = newNode;
            return;
          }
        } else {
          return null;
        }
      };
      return traverse(this.root);
    }
  }

  contains(value) {
    if (!this.root) return "Empty tree";
    else {
      const traverse = (node) => {
        if (value === node.value) {
          return true;
        } else if (value < node.value) {
          if (!node.left) {
            return false;
          } else {
            return traverse(node.left);
          }
        } else if (value > node.value) {
          if (!node.right) {
            return false;
          } else {
            return traverse(node.right);
          }
        }
      };
      return traverse(this.root);
    }
  }
}

module.exports = { binaryTree, bst };
