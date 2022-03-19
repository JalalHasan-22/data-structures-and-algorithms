"use strict";

const Stack = require("../stack");
const Queue = require("../index");

describe("Testing the stack", () => {
  it("creating a stack and testing the push method", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.length).toBe(4);
    expect(stack.top.value).toBe(4);
    expect(stack.top.next.value).toBe(3);
    expect(stack.top.next.next.value).toBe(2);
    expect(stack.top.next.next.next.value).toBe(1);
    expect(stack.bottom.value).toBe(1);
    expect(stack.bottom.next).toBeNull();
    expect(stack.bottom.prev.value).toBe(2);
  });

  it("creating a stack and testing the pop method", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    const first = stack.pop();
    expect(stack.length).toBe(3);
    expect(stack.top.value).toBe(3);
    expect(first).toBe(4);
    const second = stack.pop();
    expect(stack.length).toBe(2);
    expect(stack.top.value).toBe(2);
    expect(second).toBe(3);
    const third = stack.pop();
    expect(stack.length).toBe(1);
    expect(stack.top.value).toBe(1);
    expect(third).toBe(2);
    const fourth = stack.pop();
    expect(stack.length).toBe(0);
    expect(stack.top).toBeNull();
    expect(fourth).toBe(1);
  });

  it("Testing the peek method", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    const top = stack.peek();
    expect(top).toEqual(4);
    expect(stack.length).toBe(4);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBe(2);
    expect(stack.length).toBe(2);
  });
});

describe("Testing the pseudo Queue", () => {
  it("Testing creating the Queue and the enqueue method", () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
    queue.enqueue(1);
    expect(queue.length).toBe(1);
    expect(queue.front).toBe(1);
    expect(queue.rear).toBe(1);
    queue.enqueue(2);
    expect(queue.length).toBe(2);
    expect(queue.front).toBe(1);
    expect(queue.rear).toBe(2);
    queue.enqueue(3);
    expect(queue.length).toBe(3);
    expect(queue.front).toBe(1);
    expect(queue.rear).toBe(3);
    queue.enqueue(4);
    expect(queue.length).toBe(4);
    expect(queue.front).toBe(1);
    expect(queue.rear).toBe(4);
  });

  it("Testing creating the Queue and the dequeue method", () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.length).toBe(4);
    expect(queue.front).toBe(1);
    expect(queue.rear).toBe(4);
    expect(queue.dequeue()).toBe(1);
    expect(queue.length).toBe(3);
    expect(queue.rear).toBe(4);
    expect(queue.front).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.length).toBe(2);
    expect(queue.rear).toBe(4);
    expect(queue.front).toBe(3);
    expect(queue.dequeue()).toBe(3);
    expect(queue.length).toBe(1);
    expect(queue.rear).toBe(4);
    expect(queue.front).toBe(4);
  });
});
