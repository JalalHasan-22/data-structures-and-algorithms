"use strict";

const Doubly = require("../index");

describe("Testing the doubly linked list", () => {
  it("testing the insert method", () => {
    const doubly = new Doubly();
    doubly.insert("A");
    doubly.insert("B");
    doubly.insert("C");
    doubly.insert("D");
    const head = doubly.getHead();
    const Tail = doubly.getTail();
    expect(head).toEqual("D");
    expect(Tail).toEqual("A");
    expect(doubly.tail.prev.value).toEqual("B");
    expect(doubly.tail.prev.prev.value).toEqual("C");
    expect(doubly.tail.prev.prev.prev.value).toEqual("D");
    expect(doubly.tail.prev.prev.prev.prev).toBeNull();
    expect(doubly.head.next.value).toEqual("C");
    expect(doubly.head.next.next.value).toEqual("B");
    expect(doubly.head.next.next.next.value).toEqual("A");
    expect(doubly.head.next.next.next.next).toBeNull();
    expect(doubly.getLength()).toBe(4);
  });

  it("testing the append method", () => {
    const doubly = new Doubly();
    doubly.append("A");
    doubly.append("B");
    doubly.append("C");
    doubly.append("D");
    const head = doubly.getHead();
    const tail = doubly.getTail();
    expect(head).toEqual("A");
    expect(tail).toEqual("D");
    expect(doubly.tail.prev.value).toEqual("C");
    expect(doubly.tail.prev.prev.value).toEqual("B");
    expect(doubly.tail.prev.prev.prev.value).toEqual("A");
    expect(doubly.tail.prev.prev.prev.prev).toBeNull();
    expect(doubly.head.next.value).toEqual("B");
    expect(doubly.head.next.next.value).toEqual("C");
    expect(doubly.head.next.next.next.value).toEqual("D");
    expect(doubly.head.next.next.next.next).toBeNull();
    expect(doubly.getLength()).toBe(4);
  });
});
