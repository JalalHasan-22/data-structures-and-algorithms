"use strict";

const Queue = require("../queue");

let testQueue;
describe("testing the Queue", () => {
  beforeAll(() => {
    testQueue = new Queue();
  });
  it("creating a new queue datastructure", () => {
    expect(testQueue.front).toBe(null);
    expect(testQueue.rear).toBe(null);
    expect(testQueue.length).toBe(0);
  });

  it("testing the enqueue method", () => {
    testQueue.enqueue(1);
    expect(testQueue.peek()).toEqual(1);
    expect(testQueue.isEmpty()).toBeFalsy();
    expect(testQueue.front.value).toBe(1);
    expect(testQueue.rear.value).toBe(1);
    expect(testQueue.front.next).toBe(null);
    expect(testQueue.front.prev).toBe(null);
    testQueue.enqueue(2);
    expect(testQueue.peek()).toEqual(1);
    expect(testQueue.isEmpty()).toBeFalsy();
    expect(testQueue.front.value).toBe(1);
    expect(testQueue.rear.value).toBe(2);
    expect(testQueue.front.next).toBe(null);
    expect(testQueue.front.prev.value).toBe(2);
    expect(testQueue.length).toBe(2);
    testQueue.enqueue(3);
    expect(testQueue.peek()).toEqual(1);
    expect(testQueue.isEmpty()).toBeFalsy();
    expect(testQueue.front.value).toBe(1);
    expect(testQueue.rear.value).toBe(3);
    expect(testQueue.front.next).toBe(null);
    expect(testQueue.front.prev.value).toBe(2);
    expect(testQueue.front.prev.prev.value).toBe(3);
    expect(testQueue.length).toBe(3);
    testQueue.toString();
  });

  it("testing the dequeue method", () => {
    expect(testQueue.front.value).toBe(1);
    expect(testQueue.dequeue()).toEqual(1);
    expect(testQueue.front.value).toEqual(2);
    expect(testQueue.front.next).toBeNull();
    expect(testQueue.front.prev.value).toBe(3);
    expect(testQueue.rear.value).toBe(3);
    testQueue.toString();
    testQueue.enqueue(4);
    testQueue.enqueue(5);
    expect(testQueue.dequeue()).toEqual(2);
    expect(testQueue.rear.value).toBe(5);
    expect(testQueue.rear.prev).toBeNull();
    expect(testQueue.isEmpty()).toBeFalsy();
    expect(testQueue.length).toBe(3);
  });
});
