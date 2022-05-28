"use strict";

const Queue = require("../queue");

describe("Testing the queue data structure", () => {
  const myQueue = new Queue();

  // first test case
  it("Testing the queue instence", () => {
    expect(myQueue).toBeInstanceOf(Object);
    expect(myQueue.size).toBeFalsy();
    expect(myQueue.items).toEqual([]);
  });

  // Second test case
  it("Testing the Enqueue method", () => {
    myQueue.enqueue(100);
    myQueue.enqueue(200);
    myQueue.enqueue(300);

    expect(myQueue.size).toEqual(3);
    expect(myQueue.items).toEqual([100, 200, 300]);
    expect(myQueue.front()).toEqual(100);
  });

  // third test case
  it("Testing the dequeue method", () => {
    expect(myQueue.dequeue()).toEqual(100);
    expect(myQueue.front()).toEqual(200);
    expect(myQueue.dequeue()).toEqual(200);
    expect(myQueue.front()).toEqual(300);
    expect(myQueue.getSize()).toEqual(1);
    expect(myQueue.dequeue()).toEqual(300);
    expect(myQueue.getSize()).toEqual(0);
  });

  //Fourth test case
  it("Testing the isEmpty method", () => {
    expect(myQueue.isEmpty()).toBeTruthy();
    myQueue.enqueue(300);
    expect(myQueue.isEmpty()).toBeFalsy();
  });

  // Fifth test case
  it("Testing the getElements method", () => {
    myQueue.enqueue(200);
    myQueue.enqueue(100);
    expect(myQueue.getElements()).toEqual("300 => 200 => 100");
  });
});
