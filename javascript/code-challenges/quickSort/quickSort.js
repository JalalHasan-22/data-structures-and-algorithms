"use strict";

function quickSort(arr, left, right) {
  if (left < right) {
    // Partition the array by setting the position of the pivot value
    let position = partition(arr, left, right);

    // Sort the left
    quickSort(arr, left, position - 1);

    // Sort the right
    quickSort(arr, position + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // set a pivot value as a point of reference
  let pivot = arr[right];

  // create a variable to track the largest index of numbers lower than the defined pivot
  let low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;
