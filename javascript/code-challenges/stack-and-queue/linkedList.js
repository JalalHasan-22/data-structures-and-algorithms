"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
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
    this.length++;
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
  retreive() {
    if (!this.head) return "empty";
    const temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length--;
    return temp.value;
  }
}

module.exports = LinkedList;
