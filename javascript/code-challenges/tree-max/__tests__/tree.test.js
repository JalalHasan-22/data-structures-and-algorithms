"use strict";

const Node = require("../node");
const binaryTree = require("../tree");
let tree;

describe("Testing the binary tree and the three depth-first travers methods", () => {
  beforeAll(() => {
    // Creating our nodes
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    // Assigning left and right for the nodes
    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    // Creating a new Binary Tree with the root being node one
    tree = new binaryTree(one);
  });

  it("Testing the Tree structure", () => {
    expect(tree.root.value).toEqual(1);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(3);
  });

  it("Testing the preOrder method", () => {
    let result = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(result);
  });

  it("Testing the inOrder method", () => {
    let result = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(result);
  });

  it("Testing the postOrder method", () => {
    let result = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(result);
  });

  it("Testing the findMax1 method", () => {
    expect(tree.findMax1()).toEqual(9);
  });

  it("Testing the findMax2 method", () => {
    expect(tree.findMax2()).toEqual(9);
  });
});
