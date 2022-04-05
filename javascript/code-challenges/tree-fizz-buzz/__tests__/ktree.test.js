"use strict";
const { kTree, treeNode } = require("../tree");

let tree;

describe("testing the K-ary tree", () => {
  beforeAll(() => {
    const one = new treeNode(1);
    const two = new treeNode(2);
    const three = new treeNode(3);
    const four = new treeNode(4);
    const five = new treeNode(5);
    const six = new treeNode(6);
    const seven = new treeNode(7);

    one.children.push(two);
    one.children.push(three);
    one.children.push(four);
    two.children.push(five);
    two.children.push(six);
    three.children.push(seven);

    tree = new kTree(one);
  });

  it("testing the k-ary tree instance", () => {
    const result = [1, 2, 3, 4, 5, 6, 7];
    expect(tree.breadthFirst()).toEqual(result);
  });
});
