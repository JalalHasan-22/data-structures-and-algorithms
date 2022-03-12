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

describe("Testing the zipped linked list method", () => {
  it("testing the function on two equal length lists", () => {
    const ll1 = new LinkedLilst();
    const ll2 = new LinkedLilst();
    ll1.append(1);
    ll1.append(3);
    ll1.append(5);
    ll2.append(2);
    ll2.append(4);
    ll2.append(6);
    const zippedList = ll1.zipLists(ll1, ll2);
    expect(zippedList.toString()).toEqual(
      "{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> NULL"
    );
  });

  it("testing the zipped list method on not equal length lists", () => {
    const ll1 = new LinkedLilst();
    const ll2 = new LinkedLilst();
    ll1.append(1);
    ll1.append(3);
    ll2.append(2);
    ll2.append(4);
    ll2.append(5);
    const zippedList = ll2.zipLists(ll1, ll2);
    expect(zippedList.toString()).toEqual(
      "{1} -> {2} -> {3} -> {4} -> {5} -> NULL"
    );
  });

  it("testing the zipped list method on not equal length lists where one list contains one element only", () => {
    const ll1 = new LinkedLilst();
    const ll2 = new LinkedLilst();
    ll1.append(1);
    ll2.append(2);
    ll2.append(3);
    ll2.append(4);
    ll2.append(5);
    const zippedList = ll2.zipLists(ll1, ll2);
    expect(zippedList.toString()).toEqual(
      "{1} -> {2} -> {3} -> {4} -> {5} -> NULL"
    );
  });

  it("testing the zipped list method on one null list", () => {
    const ll1 = new LinkedLilst();
    const ll2 = new LinkedLilst();
    const zippedList = ll2.zipLists(ll1, ll2);
    expect(zippedList.toString()).toEqual("NULL");
  });

  it("testing the zipped list method on two null lists", () => {
    const ll1 = new LinkedLilst();
    const ll2 = new LinkedLilst();
    const zippedList = ll2.zipLists(ll1, ll2);
    expect(zippedList.toString()).toEqual("NULL");
  });
});
