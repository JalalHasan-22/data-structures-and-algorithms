"use strict";

function mergeSort(arr) {
  const n = arr.length;
  if (n < 2) {
    return arr;
  }
  const result = [];

  // calculating the middle point, keeping in mind the odd length arrays
  const middle = Math.floor(arr.length / 2);

  // using destructure to keep the original array unmutated
  const left = mergeSort([...arr].splice(0, middle));

  // using destructure to keep the original array unmutated
  const right = mergeSort([...arr].splice(middle, arr.length - 1));

  while (left.length >= 1 && right.length >= 1) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}
