"use strict";
const Graph = require("../graph");
const Vertex = require("../vertex");
const Edge = require("../edge");

describe("Testing the graph data structure", () => {
  const myGraph = new Graph();
  const zero = new Vertex(0);
  const one = new Vertex(1);
  const two = new Vertex(2);
  const three = new Vertex(3);
  const four = new Vertex(4);
  const five = new Vertex(5);

  myGraph.addVertex(zero);
  myGraph.addVertex(one);
  myGraph.addVertex(two);
  myGraph.addVertex(three);
  myGraph.addVertex(four);
  myGraph.addVertex(five);

  myGraph.addEdge(zero, two, 10);
  myGraph.addEdge(one, three, 10);
  myGraph.addEdge(two, three, 10);
  myGraph.addEdge(two, four, 10);
  myGraph.addEdge(four, five, 10);
  myGraph.addEdge(five, three, 10);

  it("Testind the addVertex method", () => {
    expect(myGraph.adjacencyList.has(zero)).toBeTruthy();
    expect(myGraph.adjacencyList.has(one)).toBeTruthy();
    expect(myGraph.adjacencyList.has(two)).toBeTruthy();
    expect(myGraph.adjacencyList.has(three)).toBeTruthy();
    expect(myGraph.adjacencyList.has(four)).toBeTruthy();
    expect(myGraph.adjacencyList.has(five)).toBeTruthy();
  });

  it("Testing the get all nodes method", () => {
    const allNodes = myGraph.getVertices();
    expect(allNodes).toBeInstanceOf(Object);
    expect(allNodes.size).toEqual(6);
  });

  it("testing the size method", () => {
    expect(myGraph.size).toEqual(6);
  });

  it("testing the getNeighbors method", () => {
    const oneNeighbors = myGraph.getNeighbors(one);
    const zeroNeighbors = myGraph.getNeighbors(zero);
    expect(oneNeighbors.length).toBe(1);
    expect(zeroNeighbors.length).toBe(1);
    expect(oneNeighbors).toEqual([{ vertex: { value: 3 }, weight: 10 }]);
    expect(zeroNeighbors).toEqual([{ vertex: { value: 2 }, weight: 10 }]);
  });

  // By testing this, the addEdge method has been already tested implicitly.
});
