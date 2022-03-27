"use strict";

const Queue = require("./queue");

class AnimalShelter {
  constructor() {
    this.name = "";
    this.queue = new Queue();
  }

  enqueue(animal) {
    if (typeof animal == "object") {
      this.queue.enqueue(animal);
    } else {
      return "Animal must be of type object";
    }
  }

  dequeue(pref) {
    if (this.queue.peek().name == pref) {
      let aniName = this.queue.peek();
      this.queue.dequeue();
      return aniName;
    } else {
      return null;
    }
  }
}

class Dog extends AnimalShelter {
  constructor(name) {
    super();
    this.name = name;
  }
  animalName() {
    return this.name;
  }
}

class Cat extends AnimalShelter {
  constructor(name) {
    super();
    this.name = name;
  }
  animalName() {
    return this.name;
  }
}

module.exports = { AnimalShelter, Cat, Dog };
