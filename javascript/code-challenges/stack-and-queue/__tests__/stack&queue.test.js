"use strict";

const Node = require("../node");
const LinkedList = require("../linkedList");
const Stack = require("../stack");
const Queue = require("../queue");

describe("Testing the node", () => {
  it("Creating a node with a value", () => {
    const newNode = new Node("D");
    expect(newNode).toBeInstanceOf(Node);
    expect(newNode.next).toBeNull();
  });
});

describe("testig the Linked list", () => {
  it("testing the creation of a linked list", () => {
    const ll = new LinkedList();
    ll.insert("D");
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll.head.value).toEqual("D");
    expect(ll.head.next).toBeNull();
  });
});

describe("Testing the Stack", () => {
  it("Testing if the Stack storage is a linked list and if the top is null", () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.storage).toBeInstanceOf(LinkedList);
    expect(stack.top).toBeNull();
  });

  it("Testing the is empty method", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("Testing the is empty method", () => {
    const stack = new Stack();
    stack.storage.insert(3);
    expect(stack.isEmpty()).toBe(false);
  });

  it("Testing the push method", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.top).toEqual(4);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.storage.length).toBe(4);
  });

  it("Testing the pop method", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.top).toEqual(2);
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.storage.length).toBe(2);
  });

  it("Testing the pop method", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const temp = stack.pop();
    stack.pop();
    expect(stack.top).toEqual(1);
    expect(temp).toEqual(3);
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.storage.length).toBe(1);
  });
});

describe("testing the Queue", () => {
  it("testing the creation of the Queue", () => {
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.storage.length).toEqual(0);
  });

  it("testing the creation of the Queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.peek()).toBe(1);
    expect(queue.front).toBe(1);
    expect(queue.back).toBe(4);
    expect(queue.storage.length).toEqual(4);
  });

  it("testing the creation of the Queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toBeNull();
    expect(queue.front).toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.storage.length).toEqual(0);
  });
});
