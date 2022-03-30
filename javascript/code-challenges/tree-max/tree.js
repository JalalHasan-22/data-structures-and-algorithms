" use strict";

const Node = require("./node");

class binaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Pre-Order {Root => Left => Right}
  preOrder() {
    const result = [];

    const traverse = (node) => {
      result.push(node.value);
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // In-Order {left => Root => Right}
  inOrder() {
    const result = [];

    const traverse = (node) => {
      if (node.left !== null) traverse(node.left);
      result.push(node.value);
      if (node.right !== null) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // post-Order {left => Right => Root}
  postOrder() {
    const result = [];

    const traverse = (node) => {
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  // Finding the Maximum Value in the Tree by using any of the traverse method then using map on the result array 😁
  findMax1() {
    let maxValue = 0;
    const result = this.preOrder();
    if (result.length === 0) throw new Error("Empty tree");
    result.map((entry) => {
      if (entry > maxValue) maxValue = entry;
    });
    return maxValue;
  }

  // Finding the Maximum Value in the Tree by Traversing all tree's nodes (The propper way 🐣)
  findMax2() {
    let maxValue = 0;

    let currentNode = this.root;
    if (currentNode === null) throw new Error("Empty tree");
    else {
      maxValue = currentNode.value;
      while (currentNode.left) {
        if (currentNode.left.value > currentNode.value)
          maxValue = currentNode.left.value;
        currentNode = currentNode.left;
      }
      while (currentNode.right) {
        if (currentNode.right.value > currentNode.value)
          maxValue = currentNode.right.value;
        currentNode = currentNode.right;
      }
    }
    return maxValue;
  }
}
module.exports = binaryTree;
