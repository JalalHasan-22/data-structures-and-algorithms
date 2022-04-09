"use strict";
const { kTree, treeNode } = require("../tree");

let tree;

describe("testing the K-ary tree", () => {
  beforeAll(() => {
    const one = new treeNode(1);
    const two = new treeNode(3);
    const three = new treeNode(5);
    const four = new treeNode(15);
    const five = new treeNode(30);
    const six = new treeNode(10);
    const seven = new treeNode(12);

    one.children.push(two);
    one.children.push(three);
    one.children.push(four);
    two.children.push(five);
    two.children.push(six);
    three.children.push(seven);

    tree = new kTree(one);
  });

  it("testing the k-ary tree instance", () => {
    const result = [1, 3, 5, 15, 30, 10, 12];
    expect(tree.breadthFirst()).toEqual(result);
  });

  it("Testing the Fizz-Buzz method", () => {
    const result = [
      "1",
      "Fizz",
      "Buzz",
      "FizzBuzz",
      "FizzBuzz",
      "Buzz",
      "Fizz",
    ];
    const newTree = tree.fizzBuzzTree(tree);
    expect(newTree.breadthFirst()).toEqual(result);
  });
});
