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
}
