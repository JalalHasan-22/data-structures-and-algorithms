"use strict";

const { binaryTree, Node } = require("../tree");

let tree;
describe("Testing the breadth first traversal method", () => {
  beforeAll(() => {
    const a = new Node("A");
    const b = new Node("B");
    const c = new Node("C");
    const d = new Node("D");
    const e = new Node("E");
    const f = new Node("F");
    const g = new Node("G");
    const h = new Node("H");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;
    g.left = h;

    tree = new binaryTree(a);
  });
  it("Testing the tree datastructure", () => {
    expect(tree.root.value).toBe("A");
    const result = ["A", "B", "C", "D", "E", "F", "G", "H"];
    expect(tree.breadthFirst()).toEqual(result);
  });
});
