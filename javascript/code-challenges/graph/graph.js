"use strict";

const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }

  // Adding a new node (vertex to the graph)
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    this.size += 1;
    return vertex;
  }

  //Adding an edge between two nodes (bi-directional graph)
  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      return console.log("One or more of the nodes does not exist!");
    } else {
      // adding the edge from start to end
      const startNeighbors = this.getNeighbors(start);
      startNeighbors.push(new Edge(end, weight));

      // adding the edge from end to start
      const endNeighbors = this.getNeighbors(end);
      endNeighbors.push(new Edge(start, weight));
    }
  }

  //get All the nodes of the graph
  getVertexes() {
    return this.adjacencyList;
  }

  //Getting the neighbors of a vertex
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  //get the size
  size() {
    return this.size;
  }
}

module.exports = Graph;
