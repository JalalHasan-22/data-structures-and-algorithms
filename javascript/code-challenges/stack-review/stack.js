"use strict";

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // Add Element to the top of the stack
  push(value) {
    this.items[this.size] = value;
    this.size++;
    return console.log(`${value} was added at the position ${this.size - 1}`);
  }

  // Return the top element of the stack (last in array)
  // Return null if stack is empty
  pop() {
    if (!this.size) {
      return null;
    }
    const deleted = this.items.pop();
    this.size--;
    console.log(`${deleted} was removed`);
    return deleted;

    //Other way to do this wityhout using the built in pop method
    // const deletedd = this.items[this.size - 1];
    // this.size--;
    // return console.log(`${deletedd} was removed from the stack.`);
    // this is bad as the element will still be saved in the items array
    // eventhough the size has been decreased
  }
  // check the top element in the stack
  peak() {
    if (this.size === 0) {
      console.log("No element at the top as the stack is empty");
      return null;
    }
    const topElement = this.items[this.size - 1];
    console.log(`${topElement} is the top element`);
    return topElement;
  }

  //check if the stack is empty
  isEmpty() {
    console.log(`${this.size === 0 ? "Stack is empty" : "Stack is not empty"}`);
    return this.size === 0;
  }

  // check the size of the stack
  getSize() {
    console.log(`${this.size} elements in the stack`);
    return this.size;
  }

  // print all stack elements
  getElements() {
    if (this.size === 0) {
      console.log("No elements in the stack");
      return null;
    }
    let outputStr = "";
    this.items.forEach((element, i) => {
      outputStr += element;
      if (i < this.size - 1) {
        outputStr += " => ";
      }
    });
    console.log(outputStr);
    return outputStr;
  }

  //Clear all of the Stack elements
  clear() {
    this.items = [];
    this.size = 0;
    console.log("Stack has been cleared");
    return this.items;
  }
}

module.exports = Stack;
