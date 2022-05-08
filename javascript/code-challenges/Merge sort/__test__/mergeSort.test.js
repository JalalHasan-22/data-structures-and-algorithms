"use strict";

const mergeSort = require("../mergeSort");
describe("Insertion Sort", () => {
  test(" sort", () => {
    const arr = [1, 18, 48, 32, 29, 15];
    expect(mergeSort(arr)).toStrictEqual([1, 15, 18, 29, 32, 48]);
  });

  test("Reverse-sorted", () => {
    const arr = [10, 7, 1, 0, -1, -2];
    expect(mergeSort(arr)).toStrictEqual([-2, -1, 0, 1, 7, 10]);
  });

  test("Few uniques", () => {
    const arr = [1, 2, 2, 3, 3, 4, 4];
    expect(mergeSort(arr)).toStrictEqual([1, 2, 2, 3, 3, 4, 4]);
  });

  test("Nearly-sorted", () => {
    const arr = [1, 2, 3, 6, 5];
    expect(mergeSort(arr)).toStrictEqual([1, 2, 3, 5, 6]);
  });
});
