"use strict";

const Node = require("../node");
const Queue = require("../queue");
const { AnimalShelter, Cat, Dog } = require("../index");

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
  });
});

//// The main Dish

describe("Testing the Animal Shelter Class", () => {
  it("test creating an AnimalShelter instance", () => {
    const Animal = new AnimalShelter();
    expect(Animal).toBeDefined();
  });

  it("test adding a cat object ", () => {
    const newShelter = new AnimalShelter();
    const cat = new Cat("cat");

    newShelter.enqueue(cat);
    expect(newShelter.queue.length).toBe(1);
    expect(newShelter.queue.peek().animalName()).toBe("cat");
  });

  it("test adding dog object ", () => {
    const newShelter = new AnimalShelter();
    const dog = new Dog("dog");
    newShelter.enqueue(dog);
    expect(newShelter.queue.length).toBe(1);
    expect(newShelter.queue.peek().animalName()).toBe("dog");
    expect(newShelter.enqueue("cat")).toBe("Animal must be of type object");
  });

  it("deleting object ", () => {
    const newShelter = new AnimalShelter();
    const dog = new Dog("dog");
    newShelter.enqueue(dog);
    expect(newShelter.queue.length).toBe(1);
    expect(newShelter.queue.peek().animalName()).toBe("dog");
    expect(typeof newShelter.dequeue("dog")).toBe("object");
    expect(newShelter.queue.length).toBe(0);
  });
});
