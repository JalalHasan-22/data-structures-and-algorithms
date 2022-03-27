"use strict";

const validateBrackets = require("../brackets");

describe("testing the brackets validator function", () => {
  it("testing the function with equal closed set of brackets", () => {
    expect(validateBrackets("{}(){}")).toBe(true);
  });
  it("testing the function with equal closed set of brackets and characters in between", () => {
    expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
  });
  it("testing the function with equal closed set of brackets and characters in between", () => {
    expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });
  it("testing the function with unequal closed set of brackets", () => {
    expect(validateBrackets("[({}]")).toBe(false);
  });
  it("testing the function with unequal closed set of brackets", () => {
    expect(validateBrackets("{(})")).toBe(false);
  });
});
