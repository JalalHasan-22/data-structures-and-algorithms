"use strict";

const HashTable = require("../hashtable/hashtable");

function treeIntersection(firstTree, secondTree) {
  let equalValues = [];

  let hashTable = new HashTable(1024);

  firstTree.preOrder().forEach((item) => {
    hashTable.set(item, item);
  });
  secondTree.preOrder().forEach((item) => {
    if (hashTable.contains(item)) {
      equalValues.push(item);
    } else {
      hashTable.set(item, item);
    }
  });
  return equalValues;
}

module.exports = treeIntersection;
