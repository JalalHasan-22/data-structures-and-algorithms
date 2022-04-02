"use strict";

const Node = require("../node");
const { binaryTree } = require("../tree");
const { bst } = require("../tree");
let tree, bst1;

describe("testing the binary tree", () => {
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const ten = new Node(10);
    const twintyThree = new Node(23);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;
    five.left = ten;

    tree = new binaryTree(one);
    bst1 = new bst(twintyThree);
  });

  it("testing the tree instance", () => {
    expect(tree.root.value).toBe(1);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(3);
  });

  it("testing the pre-order traversal", () => {
    const result = [1, 2, 6, 7, 8, 9, 3, 4, 5, 10];
    expect(tree.preOrder()).toEqual(result);
  });

  it("testing the inOrder traversal", () => {
    const result = [6, 8, 7, 9, 2, 1, 4, 3, 10, 5];
    expect(tree.inOrder()).toEqual(result);
  });

  it("testing the postOrder traversal", () => {
    const result = [8, 9, 7, 6, 2, 4, 10, 5, 3, 1];
    expect(tree.postOrder()).toEqual(result);
  });
});

describe("testing the binary search tree", () => {
  it("testing the Binary search tree structure", () => {
    expect(bst1.root.value).toBe(23);
  });

  it("testing the add method", () => {
    bst1.add(8);
    bst1.add(4);
    bst1.add(16);
    bst1.add(15);
    bst1.add(22);
    bst1.add(42);
    bst1.add(27);
    bst1.add(85);
    bst1.add(105);
    const result = [23, 8, 4, 16, 15, 22, 42, 27, 85, 105];
    expect(bst1.root.left.value).toEqual(8);
    expect(bst1.root.right.value).toEqual(42);
    expect(bst1.preOrder()).toEqual(result);
  });
});
