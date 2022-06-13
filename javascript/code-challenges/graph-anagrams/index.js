"use strict";

const anagrams = (str1, str2) => {
  // Remove spaces and create two arrays
  const arr1 = str1.toLowerCase().replace(/\s/g, "").split("");
  const arr2 = str2.toLowerCase().replace(/\s/g, "").split("");

  //Creating a new set for each array
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  if (set1.size !== set2.size) return false;
  else {
    for (let char of arr1) {
      if (set2.has(char)) continue;
      else return false;
    }
    return true;
  }
};
module.exports = anagrams;
