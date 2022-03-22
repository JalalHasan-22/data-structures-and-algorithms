"use strict";

const Queue = require("./queue");

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
    this.numberOfAnimals = 0;
  }

  enqueueShelter(animal) {
    if (animal === "cat") {
      this.cats.enqueue(animal);
      this.numberOfAnimals++;
    }
    if (animal === "dog") {
      this.dogs.enqueue(animal);
      this.numberOfAnimals++;
    }
    if (animal !== "cat" || animal !== "dog") return null;
  }

  dequeueShelter(pref) {
    if (pref === "cat") {
      this.numberOfAnimals--;
      return this.cats.dequeue();
    }
    if (pref === "dog") {
      this.numberOfAnimals--;
      return this.dogs.dequeue();
    }
    if (pref !== "cat" || pref !== "dog") return null;
  }
}

module.exports = AnimalShelter;
