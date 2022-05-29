"use strict";

const Graph = require("../graph");
const Vertex = require("../vertex");
const Edge = require("../edge");

describe("Testing the Graph Breadth First Traversal", () => {
  // Creating the Graph Instence
  const myGraph = new Graph();

  // Creating the Vertices
  const Pandora = new Vertex("Pandora");
  const Arendelle = new Vertex("Arendelle");
  const MetroVille = new Vertex("MetroVille");
  const Monstropolis = new Vertex("Monstropolis");
  const Narnia = new Vertex("Narnia");
  const Naboo = new Vertex("Naboo");

  // Adding Vertices to the graph
  myGraph.add(Pandora);
  myGraph.add(Arendelle);
  myGraph.add(MetroVille);
  myGraph.add(Monstropolis);
  myGraph.add(Narnia);
  myGraph.add(Naboo);

  // Adding Edges between Vertices
  myGraph.addEdge(Pandora, Arendelle);
  myGraph.addEdge(Arendelle, MetroVille);
  myGraph.addEdge(Arendelle, Monstropolis);
  myGraph.addEdge(MetroVille, Monstropolis);
  myGraph.addEdge(MetroVille, Narnia);
  myGraph.addEdge(MetroVille, Naboo);
  myGraph.addEdge(Monstropolis, Naboo);
  myGraph.addEdge(Naboo, Narnia);

  it("Testing the graph instence", () => {
    expect(myGraph).toBeInstanceOf(Object);
    expect(myGraph.adjacencyList.size).toBe(6);
    expect(myGraph.size).toBe(6);
  });

  it("Testing adding some Vertices and edges to the graph", () => {
    expect(myGraph.getNeighbors(Pandora)).toEqual([
      {
        vertex: {
          value: "Arendelle",
        },
        weight: 0,
      },
    ]);
  });
  expect(myGraph.getNeighbors(Arendelle)).toEqual([
    {
      vertex: {
        value: "Pandora",
      },
      weight: 0,
    },
    {
      vertex: {
        value: "MetroVille",
      },
      weight: 0,
    },
    {
      vertex: {
        value: "Monstropolis",
      },
      weight: 0,
    },
  ]);

  it("Testing the Breadth First Traversal function", () => {
    const output = myGraph.bft(Pandora);
    expect(output).toEqual([
      "Pandora",

      "Arendelle",

      "MetroVille",

      "Monstropolis",

      "Narnia",

      "Naboo",
    ]);
  });

  it("Testing the breadth first traversal from a different starting point", () => {
    const output = myGraph.bft(Monstropolis);

    expect(output).toEqual([
      "Monstropolis",
      "Arendelle",
      "MetroVille",
      "Naboo",
      "Pandora",
      "Narnia",
    ]);
  });
});
