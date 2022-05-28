"use strict";

class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  //Adding an element to the front of the queue
  enqueue(value) {
    this.items.push(value);
    console.log(`${value} was added at the position ${this.size}`);
    this.size++;
    return value;
  }

  //Removing the first element of the queue
  dequeue() {
    const deleted = this.items.shift();
    this.size--;
    console.log(`${deleted} was removed from the queue`);
    return deleted;
  }

  //Checking the first element of the queue
  front() {
    return this.items[0];
  }

  // checking if the queue is empty

  isEmpty() {
    console.log(
      `${this.size === 0 ? "The queue is empty" : "The queue is NOT Empty"}`
    );

    return this.size === 0;
  }

  // Get the size of the queue
  getSize() {
    return this.size;
  }

  //Print All elements of the queue
  getElements() {
    let outputStr = "";

    this.items.forEach((item, i) => {
      outputStr += item;
      if (i < this.size - 1) {
        outputStr += " => ";
      }
    });
    return outputStr;
  }
}

module.exports = Queue;
