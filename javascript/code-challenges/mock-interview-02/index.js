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

  palindrome() {
    let currentNode = this.head;
    const reversedList = new LinkedList();
    const tempArray = [];
    tempArray.unshift(currentNode.value);
    while (currentNode.next) {
      currentNode = currentNode.next;
      tempArray.unshift(currentNode.value);
    }
    for (let i = 0; i < tempArray.length; i++) {
      reversedList.append(tempArray[i]);
    }
    let current1 = this.head;
    let current2 = reversedList.head;
    let result = true;
    for (let i = 0; i < tempArray.length; i++) {
      if (current1.value !== current2.value) result = false;
      current1 = current1.next;
      current2 = current2.next;
    }
    return result;
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
