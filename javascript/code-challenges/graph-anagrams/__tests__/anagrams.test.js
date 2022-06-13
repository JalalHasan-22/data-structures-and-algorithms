"use strict";
const anagrams = require("../index");

describe("Testing the Anagrams method", () => {
  it("Testing the anagrams method", () => {
    expect(anagrams("Eleven plus two", "Twelve plus one")).toBeTruthy();
    expect(anagrams("Clint Eastwood", "Old West Action")).toBeTruthy();
    expect(anagrams("Software", "Swear often")).toBeFalsy();
    expect(anagrams("Astronomers", "Moon starers")).toBeTruthy();
  });
});
