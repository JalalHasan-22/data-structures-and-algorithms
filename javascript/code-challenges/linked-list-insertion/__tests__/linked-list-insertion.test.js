"use strict";

// Require our linked list implementation
const LinkedLilst = require("../index");

describe("testing the append method", () => {
  it("append if the list is empty", () => {
    const ll = new LinkedLilst();
    ll.append("D");
    expect(ll.head.value).toEqual("D");
    expect(ll.head.next).toBeNull();
  });
});

describe("testing the insert before method", () => {
  it("inserts a new node before given node", () => {
    const ll = new LinkedLilst();
    ll.append("A");
    ll.append("B");
    ll.append("C");
    ll.append("E");
    ll.insertBefore("D", "E");
    const str = ll.toString();
    expect(str).toEqual("{A} -> {B} -> {C} -> {D} -> {E} -> NULL");
  });
});

describe("testing the insert after method", () => {
  it("inserts a new node before given node", () => {
    const ll = new LinkedLilst();
    ll.append("A");
    ll.append("B");
    ll.append("C");
    ll.append("D");
    ll.insertAfter("E", "D");
    const str = ll.toString();
    expect(str).toEqual("{A} -> {B} -> {C} -> {D} -> {E} -> NULL");
  });
});
