"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    const node = new Node(value);
    // 1. if the list is empty
    if (!this.head) {
      this.head = node;
    } // 2. if the list is not empty
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  kthFromEnd(k) {
    if (k < 0 || k > this.length) return "exception";
    if (k === this.length) return this.head.value;
    const stepsToWalk = this.length - k;
    let currentNode = this.head;
    for (let i = 0; i < stepsToWalk - 1; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  // for testing
  toString() {
    let outputStr = "";

    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        outputStr += `{${currentNode.value}} -> `;
        currentNode = currentNode.next;
      }
      outputStr += `{${currentNode.value}} -> NULL`;
    } else {
      outputStr = "list is empty";
    }

    return outputStr;
  }
}

module.exports = LinkedList;
