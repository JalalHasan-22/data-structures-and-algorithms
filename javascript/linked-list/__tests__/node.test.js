"use strict";

const Node = require("../node");

describe("Testing the node class", () => {
  it("testing the node instance", () => {
    const node = new Node("D");
    expect(node).toBeDefined();
    expect(node.next).toBeNull();
    expect(node.value).toEqual("D");
  });
});
