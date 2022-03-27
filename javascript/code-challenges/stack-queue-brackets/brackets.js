"use strict";
const Stack = require("../stack-queue-pseudo/stack");

function validateBrackets(input) {
  const validationStack = new Stack();
  const myRegex = /[\w\s]+/gi;

  // remove all non-brackets input and store them in an array
  const onlyBrackets = input.replaceAll(myRegex, "").split("");

  // if the length of the array containing zero or one bracket return false immediately
  if (onlyBrackets.length <= 1) return false;

  // Storing all brackets into the stack
  onlyBrackets.map((bracket) => {
    validationStack.push(bracket);
  });
  let round = 0;
  let curly = 0;
  let square = 0;

  for (let i = 0; i <= validationStack.length; i++) {
    console.log(validationStack.peek());
    if (validationStack.peek() === "(" || validationStack.peek() === ")")
      ++round;
    if (validationStack.peek() === "{" || validationStack.peek() === "}")
      ++curly;
    if (validationStack.peek() === "[" || validationStack.peek() === "]")
      ++round;
    validationStack.pop();
  }
  console.log(round, curly, square);
  if (round % 2 === 0 && curly % 2 === 0 && square % 2 === 0) return true;
  return false;
}

module.exports = validateBrackets;
