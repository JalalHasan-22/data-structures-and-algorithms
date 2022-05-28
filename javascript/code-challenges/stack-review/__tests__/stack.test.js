"use strict";

const Stack = require("../stack");

describe("Testing the stack data structure", () => {
  const myStack = new Stack();

  //First test case
  it("Testing the stack instance", () => {
    expect(myStack).toBeInstanceOf(Object);
    expect(myStack.items).toBeDefined();
    expect(myStack.size).toBeFalsy();
  });

  // Second test case
  it("Testing the push method", () => {
    myStack.push(100);
    myStack.push(200);
    myStack.push(300);
    expect(myStack.size).toEqual(3);
  });

  //Third test case
  it("Testing the pop method", () => {
    expect(myStack.pop()).toEqual(300);
    expect(myStack.size).toEqual(2);
    expect(myStack.pop()).toEqual(200);
    expect(myStack.size).toEqual(1);
    expect(myStack.pop()).toEqual(100);
    expect(myStack.size).toEqual(0);
  });

  // Fourth Test case
  it("testing the peak method", () => {
    expect(myStack.peak()).toBeNull();
    myStack.push(100);
    expect(myStack.peak()).toEqual(100);
    myStack.push(200);
    expect(myStack.peak()).toEqual(200);
  });

  // Fifth test case
  it("Testing the isEmpty method", () => {
    expect(myStack.isEmpty()).toBeFalsy();
    myStack.pop();
    myStack.pop();
    expect(myStack.isEmpty()).toBeTruthy();
  });

  //Sixth test case
  it("Testing the size method", () => {
    expect(myStack.getSize()).toEqual(0);
    myStack.push(100);
    myStack.push(200);
    myStack.push(300);
    expect(myStack.getSize()).toEqual(3);
  });

  //Seventh Test case
  it("Testing the get elements method", () => {
    expect(myStack.getElements()).toEqual("100 => 200 => 300");
  });

  //Eighth test case
  it("Testing the clear method", () => {
    expect(myStack.clear()).toEqual([]);
    expect(myStack.getSize()).toBeFalsy();
    expect(myStack.isEmpty()).toBeTruthy();
  });
});
