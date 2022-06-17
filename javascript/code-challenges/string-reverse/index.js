"use strice";

// First Approach; using an array with a while loop
const stringReverse = (str) => {
  const strToArray = str.split("");

  let reversedString = "";
  while (strToArray.length) {
    reversedString += strToArray.pop();
  }

  return reversedString;
};

// Second approach, Using the Array Reverse Method
const stringReverse2 = (str) => {
  const strToArray = str.split("");

  const reversedString = strToArray.reverse().join("");

  return reversedString;
};

//Third approach using recursion
const stringReverse3 = (str) => {
  const strToArray = str.split("");
  let output = "";

  // Helper Recursive function
  const recursive = (arr) => {
    output += strToArray.pop();
    if (!arr.length) return;
    recursive(arr);
  };

  recursive(strToArray);

  return output;
};

module.exports = { stringReverse, stringReverse2, stringReverse3 };
