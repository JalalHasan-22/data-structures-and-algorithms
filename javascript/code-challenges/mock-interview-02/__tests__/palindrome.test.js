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

describe("Testing the append method", () => {
  it("Appending multiple elements", () => {
    const ll = new LinkedLilst();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    const stringList = ll.toString();
    expect(stringList).toEqual("{1} -> {2} -> {3} -> {4} -> NULL");
  });
});

describe("Testing whether the list is palindrome or not", () => {
  it("testing palindrome", () => {
    const ll = new LinkedLilst();
    ll.append(1);
    ll.append(3);
    ll.append(3);
    ll.append(1);
    expect(ll.palindrome()).toEqual(true);
  });

  it("Testing whether the list is palindrome or not", () => {
    const ll = new LinkedLilst();
    ll.append("t");
    ll.append("a");
    ll.append("c");
    ll.append("o");
    ll.append("c");
    ll.append("a");
    ll.append("t");
    expect(ll.palindrome()).toEqual(true);
  });
});
