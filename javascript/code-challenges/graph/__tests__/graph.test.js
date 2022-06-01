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

  //for testing CC37 only
  const six = new Vertex(6);

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

  // Testing for code challenge 37
  it("Testing the business trip function with one node not added to the graph", () => {
    expect(myGraph.businessTrip([one, two, six])).toBeNull();
  });

  it("Testing the business trip function with added nodes", () => {
    expect(myGraph.businessTrip([zero, two])).toEqual(10);
    expect(myGraph.businessTrip([one, two])).toBeNull();
    expect(myGraph.businessTrip([zero, two, three])).toEqual(20);
    expect(myGraph.businessTrip([zero, two, five])).toBeNull();
    expect(myGraph.businessTrip([zero, two, four])).toEqual(20);
    expect(myGraph.businessTrip([zero, two, four, five])).toEqual(30);
    expect(myGraph.businessTrip([five, three])).toEqual(10);
    expect(myGraph.businessTrip([four, five])).toEqual(10);
  });
});
