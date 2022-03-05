"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);

    // 1. if the linkedlist is empty
    if (!this.head) {
      this.head = node;

      // 2. if the linkedlist is not empty
    } else {
      node.next = this.head;
      this.head = node;
    }
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

  includes(value) {
    let currentNode = this.head;
    let result;
    while (currentNode.next) {
      result = currentNode.value === value ? true : false;
      currentNode = currentNode.next;
    }
    // if the list has only one element; it will not enter the while loop.
    // it is also important to be able to compare the last element in the list
    result = currentNode.value === value ? true : false;
    return result;
  }

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
