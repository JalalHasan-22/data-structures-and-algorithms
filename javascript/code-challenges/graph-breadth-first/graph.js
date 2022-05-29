"use strict";

const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Adding a vertex
  add(vertex) {
    this.adjacencyList.set(vertex, []);
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
}

module.exports = Graph;
