"use strict";

const Graph = require("../graph");
const Vertex = require("../vertex");
const Edge = require("../edge");

describe("Testing the Graph Breadth First Traversal", () => {
  const myGraph = new Graph();

  it("Testing the graph instence", () => {
    expect(myGraph).toBeInstanceOf(Object);
    expect(myGraph.adjacencyList);
  });
});
