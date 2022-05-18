"use strict";

const LinkedList = require("./linkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    key = key.toString();
    return (
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt();
      }, 0) *
        599) %
      this.size
    );
  }

  set(key, value) {
    const hashedIndx = this.hash(key);
    // console.log(hashedIndx);
    if (!this.table[hashedIndx]) {
      this.table[hashedIndx] = new LinkedList();
    }
    const entry = { [key]: value };
    this.table[hashedIndx].append(entry);
  }

  get(key) {
    const hashedIndx = this.hash(key);
    if (!this.table[hashedIndx]) return null;
    else {
      let counter = 1;
      let outputStr = "";
      let currentNode = this.table[hashedIndx].head;
      outputStr += `${counter}- ${Object.keys(
        currentNode.value
      )} : ${Object.values(currentNode.value)}. `;
      while (currentNode.next) {
        currentNode = currentNode.next;
        outputStr += ` => ${++counter}- ${Object.keys(
          currentNode.value
        )} : ${Object.values(currentNode.value)}. `;
      }
      return outputStr;
    }
  }

  contains(key) {
    if (!this.get(key)) return false;
    return true;
  }

  keys() {
    let allKeysArray = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        let currentNode = this.table[i].head;
        let singleKey = Object.keys(currentNode.value);
        allKeysArray = [...allKeysArray, ...singleKey];
        while (currentNode.next) {
          currentNode = currentNode.next;
          singleKey = Object.keys(currentNode.value);
          allKeysArray = [...allKeysArray, singleKey];
        }
      }
    }
    return allKeysArray;
  }
}

module.exports = HashTable;
