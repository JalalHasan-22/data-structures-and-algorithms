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
  getVertices() {
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

  // Code-challenge-37
  //Business trip function
  businessTrip(cities) {
    // checking if any of the nodes are not added to the graph
    for (let city of cities) {
      if (!this.adjacencyList.has(city)) return null;
    }
    //If all the nodes are added to the graph; check if there is a direct connection
    let sumOfWeights = 0;

    //we are looping over the cities array less by one as we keep comparing the current city with the next city
    // if we keep looping over the full array length; we will get an error of undefined when comparing with the next city
    for (let i = 0; i < cities.length - 1; i++) {
      // get the neighbors of the first city in the array
      const neighbors = this.getNeighbors(cities[i]);

      //Create a check array created from filtering the neighbors array and comparing the value to the next city
      // in the array, if no match found; the length of this array will be zero so we return null meaning there is
      // no direct connection between those two vertices
      const checkArray = neighbors.filter((city) => {
        return city.vertex.value === cities[i + 1].value;
      });
      if (!checkArray.length) return null;
      else {
        sumOfWeights += checkArray[0].weight;
      }
    }
    return sumOfWeights;
  }

  // Code challenge Class 38
  // Graph Depth first traversal

  depthFirst(vertex) {
    if (!vertex) return null;

    const queue = [];
    const visited = new Set();

    queue.push(vertex);
    while (queue.length) {
      const currentElement = queue[queue.length - 1];

      let neighbors = this.getNeighbors(currentElement);

      let hasUnvisitedNeighbors = false;

      for (let edge of neighbors) {
        let neighbor = edge.vertex;

        if (!visited.has(neighbor)) {
          hasUnvisitedNeighbors = true;
          break;
        }
      }

      if (hasUnvisitedNeighbors) {
        visited.add(currentElement);
        for (let edge of neighbors) {
          let neighbor = edge.vertex;

          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      } else {
        visited.add(currentElement);
        queue.pop();
      }
    }
    return [...visited];
  }
}

module.exports = Graph;
