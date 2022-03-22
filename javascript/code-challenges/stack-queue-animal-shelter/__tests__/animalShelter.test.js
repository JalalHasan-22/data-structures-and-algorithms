"use strict";

const Node = require("../node");
const Queue = require("../queue");
const Shelter = require("../index");

describe("Testing the Node Class", () => {
  it("testing the node instance", () => {
    const node = new Node("D");
    expect(node).toBeDefined();
    expect(node.next).toBeNull();
    expect(node.value).toEqual("D");
  });
});

describe("Testing the Queue Class", () => {
  it("testing the Queue instance", () => {
    const queue = new Queue();
    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();
    expect(queue.length).toBe(0);
  });

  it("testing the Queue enqueue method", () => {
    const queue = new Queue();
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");
    expect(queue.front.value).toBe("A");
    expect(queue.rear.value).toBe("C");
    expect(queue.length).toBe(3);
  });

  it("testing the Queue dequeue method", () => {
    const queue = new Queue();
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");
    queue.dequeue();
    expect(queue.front.value).toBe("A");
    expect(queue.rear.value).toBe("B");
    expect(queue.length).toBe(2);
    queue.dequeue();
    expect(queue.front.value).toBe("A");
    expect(queue.rear.value).toBe("A");
    expect(queue.length).toBe(1);
    queue.dequeue();
    expect(queue.length).toBe(0);
  });

  it("Testing the peek method", () => {
    const queue = new Queue();
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");
    expect(queue.peek().value).toEqual("A");
  });
});

//// The main Dish

describe("Testing the Animal Shelter Class", () => {
  it("testin creating the Animal Shelter Class", () => {
    const newShelter = new Shelter();
    expect(newShelter.cats).toBeInstanceOf(Queue);
    expect(newShelter.cats.front).toBeNull();
    expect(newShelter.cats.rear).toBeNull();
    expect(newShelter.cats.length).toBe(0);
    expect(newShelter.dogs).toBeInstanceOf(Queue);
    expect(newShelter.dogs.front).toBeNull();
    expect(newShelter.dogs.rear).toBeNull();
    expect(newShelter.dogs.length).toBe(0);
    expect(newShelter.numberOfAnimals).toBe(0);
  });

  it("testin creating the Animal Shelter Class and enqueue wrong animals", () => {
    const newShelter = new Shelter();
    newShelter.enqueueShelter("test");
    expect(newShelter.numberOfAnimals).toBe(0);
    expect(newShelter.enqueueShelter("Jalal")).toBeNull();
  });

  it("testin creating the Animal Shelter Class and enqueue correct animals", () => {
    const newShelter = new Shelter();
    newShelter.enqueueShelter("dog");
    expect(newShelter.numberOfAnimals).toBe(1);
    expect(newShelter.dogs.length).toBe(1);
    newShelter.enqueueShelter("cat");
    expect(newShelter.cats.length).toBe(1);
    expect(newShelter.numberOfAnimals).toBe(2);
    newShelter.enqueueShelter("cat");
    expect(newShelter.numberOfAnimals).toBe(3);
    const result = newShelter.dequeueShelter("cat");
    expect(result.value).toBe("cat");
    const falsy = newShelter.dequeueShelter("false");
    expect(falsy).toBeNull();
  });
});
