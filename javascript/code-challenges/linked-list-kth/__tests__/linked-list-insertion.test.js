"use strict";

// Require our linked list implementation
const LinkedLilst = require("../index");

describe("testing the append method", () => {
  it("append if the list is empty", () => {
    const ll = new LinkedLilst();
    ll.append("D");
    expect(ll.head.value).toEqual("D");
    expect(ll.head.next).toBeNull();
    expect(ll.length).toEqual(1);
  });
});

describe("testing the kth element from the end of the list", () => {
  it("where K is greater than the length of the list", () => {
    const ll = new LinkedLilst();
    expect(ll.kthFromEnd(12)).toEqual("exception");
  });
});

describe("testing the kth element from the end of the list", () => {
  it("Where k is not a positive integer", () => {
    const ll = new LinkedLilst();
    expect(ll.kthFromEnd(-1)).toEqual("exception");
  });
});

describe("testing the kth element from the end of the list", () => {
  it("Where the linked list size is bigger than k", () => {
    const ll = new LinkedLilst();
    ll.append("A");
    ll.append("B");
    ll.append("C");
    ll.append("D");
    expect(ll.kthFromEnd(2)).toEqual("B");
  });
  it("Where the linked list size is bigger than k", () => {
    const ll = new LinkedLilst();
    ll.append("A");
    ll.append("B");
    ll.append("C");
    ll.append("D");
    expect(ll.kthFromEnd(0)).toEqual("D");
  });
  it("Where the linked list size is bigger than k", () => {
    const ll = new LinkedLilst();
    ll.append("A");
    ll.append("B");
    ll.append("C");
    ll.append("D");
    expect(ll.kthFromEnd(4)).toEqual("A");
  });
});

describe("testing the kth element from the end of the list", () => {
  it("Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    const ll = new LinkedLilst();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    ll.append(6);
    ll.append(7);
    expect(ll.length).toEqual(7);
    expect(ll.kthFromEnd(4)).toEqual(3);
  });
});
