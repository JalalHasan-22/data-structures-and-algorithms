"use strict";

// Require our linked list implementation
const LinkedLilst = require("../index");

describe("testing the LinkedList", () => {
  it("test inserting the empty ll", () => {
    const ll = new LinkedLilst();
    expect(ll).toBeDefined();
    expect(ll).toBeInstanceOf(LinkedLilst);
    expect(ll.head).toBeNull();
  });
});

describe("testing the insert method", () => {
  it("test inserting an element to an empty ll", () => {
    const ll = new LinkedLilst();
    ll.insert("D");
    expect(ll.head.value).toEqual("D");
    expect(ll.head.next).toBeNull;
  });

  it("test inserting to a non-empty list", () => {
    const ll = new LinkedLilst();
    ll.insert("J");
    ll.insert("D");
    expect(ll.head.value).toEqual("D");
    expect(ll.head.next.value).toEqual("J");
  });
});

describe("testing the append method", () => {
  it("append if the list is empty", () => {
    const ll = new LinkedLilst();
    ll.append("D");
    expect(ll.head.value).toEqual("D");
    expect(ll.head.next).toBeNull();
  });

  it("test appending to a non-empty list", () => {
    const ll = new LinkedLilst();
    ll.append("A");
    ll.append("B");
    ll.append("C");
    expect(ll.head.value).toEqual("A");
    expect(ll.head.next.value).toEqual("B");
    expect(ll.head.next.next.value).toEqual("C");
    expect(ll.head.next.next.next).toBeNull();
  });
});

describe("Testing the contains method", () => {
  it("test if the list contains a certain element", () => {
    const ll = new LinkedLilst();
    ll.insert("D");
    const result = ll.includes("D");
    expect(result).toEqual(true);
  });
  it("test if the list contains a certain element", () => {
    const ll = new LinkedLilst();
    ll.insert("A");
    ll.insert("B");
    ll.append("C");
    ll.append("D");
    const result = ll.includes("D");
    expect(result).toEqual(true);
    expect(ll.includes("J")).toEqual(false);
  });

  describe("Testing the to string method", () => {
    it("tests the output in case ll was empty", () => {
      const ll = new LinkedLilst();
      expect(ll.toString()).toEqual("list is empty");
    });

    it("Test the output string formate if ll is not empty", () => {
      const ll = new LinkedLilst();
      ll.append("A");
      ll.append("B");
      ll.append("C");
      const result = ll.toString();
      expect(result).toEqual("{A} -> {B} -> {C} -> NULL");
    });
  });

  it("Test the output string formate if ll is not empty", () => {
    const ll = new LinkedLilst();
    ll.append("A");
    ll.insert("B");
    ll.append("C");
    ll.insert("D");
    ll.insert("J");
    const result = ll.toString();
    expect(result).toEqual("{J} -> {D} -> {B} -> {A} -> {C} -> NULL");
  });
});
