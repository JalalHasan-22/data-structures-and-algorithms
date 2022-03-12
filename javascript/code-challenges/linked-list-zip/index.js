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

  // Zipped Linked Lists
  zipLists(l1, l2) {
    const zipped = new LinkedList();
    if (l1.length === 0 && l2.length === 0) return "NULL";
    let currentNode1 = l1.head;
    let currentNode2 = l2.head;
    const loopCounter = l1.length > l2.length ? l1.length : l2.length;
    for (let i = 0; i < loopCounter; i++) {
      if (currentNode1 !== null) {
        zipped.append(currentNode1.value);
        currentNode1 = currentNode1.next;
        console.log(currentNode1);
      }
      if (currentNode2 !== null) {
        zipped.append(currentNode2.value);
        currentNode2 = currentNode2.next;
        console.log(currentNode2);
      }
    }
    return zipped;
  }
}

module.exports = LinkedList;
