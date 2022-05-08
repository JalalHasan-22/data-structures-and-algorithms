"use strict";

const insertionSort = require("../insertionSort");

describe("Testing the insertion sort algorithm", () => {
  it("sorts an array", () => {
    const array = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
