"use strict";

const Tree = require("../bst");
const Node = require("../node");

describe("Testing the tree", () => {
  const myTree = new Tree();

  it("Testing the tree instance", () => {
    expect(myTree.root).toBeNull();
  });

  it("Testing the add method", () => {
    myTree.add(100);
    myTree.add(50);
    myTree.add(150);
    expect(myTree.root.value).toEqual(100);
    expect(myTree.root.left.value).toEqual(50);
    expect(myTree.root.right.value).toEqual(150);
  });

  it("Testing more with the add method", () => {
    myTree.add(25);
    myTree.add(75);
    myTree.add(125);
    myTree.add(175);

    expect(myTree.root.left.right.value).toEqual(75);
    expect(myTree.root.left.left.value).toEqual(25);
    expect(myTree.root.right.right.value).toEqual(175);
    expect(myTree.root.right.left.value).toEqual(125);
  });

  it("Testing the preOrder traversal", () => {
    expect(myTree.preOrder()).toEqual([100, 50, 25, 75, 150, 125, 175]);
  });

  it("Testing the InOrder traversal method", () => {
    expect(myTree.inOrder()).toEqual([25, 50, 75, 100, 125, 150, 175]);
  });

  it("Testing the postOrder method", () => {
    expect(myTree.postOrder()).toEqual([25, 75, 50, 125, 175, 150, 100]);
  });

  it("Testing the Breadthfirst Traversal", () => {
    expect(myTree.breadthFirst()).toEqual([100, 50, 150, 25, 75, 125, 175]);
  });
});
