"use strict";

const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }

  // Adding a vertex
  add(vertex) {
    this.adjacencyList.set(vertex, []);
    this.size += 1;
  }

  // Getting the neighbors array
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex))
      return console.log("Vertex not found!");
    return this.adjacencyList.get(vertex);
  }

  // Adding edges between Vertices
  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      return console.log("One or both of theis Vertices do Not exist!");
    }

    // Adding an edge from the start to the end
    const startAdjacents = this.getNeighbors(start);
    startAdjacents.push(new Edge(end, weight));

    // Adding an edge from the end to the start as well
    const endAdjacents = this.getNeighbors(end);
    endAdjacents.push(new Edge(start, weight));
  }

  // Implementing the Breadth First Traversal using a set for previously visited nodes

  bft(startNode) {
    const nodes = [];
    const breadth = [];
    const visited = new Set();

    breadth.push(startNode);
    nodes.push(startNode.value);
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
          nodes.push(neighborNode.value);
        }
        breadth.push(neighborNode);
      }
    }
    return nodes;
  }
}

module.exports = Graph;
