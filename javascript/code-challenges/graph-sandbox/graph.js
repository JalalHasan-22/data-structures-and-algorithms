"use strict";

const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Adding a Vertex to a graph
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  //Adding Edges to the Vertexies
  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      return console.log("One or Both Vertexies do not exist");
    }
    const adjacencies = this.getNeighbors(start);
    adjacencies.push(new Edge(end, weight));

    // If it was bi-directional graph
    const adjacencies2 = this.getNeighbors(end);
    adjacencies2.push(new Edge(start, weight));
    return;
  }

  // Get the neighbors of a vertex
  getNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      return this.adjacencyList.get(vertex);
    } else return console.log("this vertex does not exist!");
  }

  // Breadth-first traversal
  bft(startNode) {
    const nodes = [];
    const breadth = [];
    const visited = new Set();

    breadth.push(startNode);
    nodes.push(startNode);
    visited.add(startNode);

    while (breadth.length) {
      const currentNode = breadth.shift();
      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visited.has(neighborNode)) {
          continue;
        } else {
          visited.add(neighborNode);
          nodes.push(neighborNode);
        }
        breadth.push(neighborNode);
      }
    }
    return nodes;
  }
}
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

console.log(myGraph.bft(zero));
// console.log(myGraph.getNeighbors(zero));

module.exports = Graph;
