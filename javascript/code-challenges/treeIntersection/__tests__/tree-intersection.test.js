"use strict";

const treeIntersection = require("../tree-intersection");
const BinaryTree = require("../../tree-max/tree");
const Node = require("../../tree-max/node");

describe("Testing the tree-intersection function implemented using a hashmap", () => {
  // Creating our nodes for both trees

  //firstTree Nodes
  let one = new Node(150);
  let two = new Node(100);
  let three = new Node(250);
  let four = new Node(75);
  let five = new Node(160);
  let six = new Node(200);
  let seven = new Node(350);
  let eight = new Node(125);
  let nine = new Node(175);
  let ten = new Node(300);
  let eleven = new Node(500);

  //secondTree Nodes
  let first = new Node(42);
  let second = new Node(100);
  let third = new Node(600);
  let fourth = new Node(15);
  let fivth = new Node(160);
  let sixth = new Node(200);
  let seventh = new Node(350);
  let eighth = new Node(125);
  let nineth = new Node(175);
  let tenth = new Node(4);
  let eleventh = new Node(500);

  // Assigning left and right for the first tree nodes
  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
  three.left = six;
  three.right = seven;
  five.left = eight;
  five.right = nine;
  seven.left = ten;
  seven.right = eleven;

  // Assigning left and right for the second tree nodes
  first.left = second;
  first.right = third;
  second.left = fourth;
  second.right = fivth;
  third.left = sixth;
  third.right = seventh;
  fivth.left = eighth;
  fivth.right = nineth;
  seventh.left = tenth;
  seventh.right = eleventh;

  // Creating a new Binary Tree with the root being node one
  const firstTree = new BinaryTree(one);
  const secondTree = new BinaryTree(first);

  // Test case
  it("Testing equal nodes in two binary trees", () => {
    const result = [100, 160, 125, 175, 200, 350, 500];
    expect(treeIntersection(firstTree, secondTree)).toEqual(result);
  });
});
