"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
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
  }

  insertBefore(newValue, value) {
    const node = new Node(newValue);

    let currentNode = this.head;
    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
  }

  insertAfter(newValue, value) {
    const node = new Node(newValue);
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
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
