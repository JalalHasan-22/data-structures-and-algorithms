"use strict";

const { stringReverse, stringReverse2, stringReverse3 } = require("../index");

describe("Testing the reverse string functions", () => {
  const testStr = "I am a full stack web developer";
  it("Testing the first method (Array & while loop)", () => {
    expect(stringReverse(testStr)).toEqual("repoleved bew kcats lluf a ma I");
  });

  it("Testing the Second method (Array & Array.reverse Method)", () => {
    expect(stringReverse2(testStr)).toEqual("repoleved bew kcats lluf a ma I");
  });

  it("Testing the Third method (Array & recursion Method)", () => {
    expect(stringReverse3(testStr)).toEqual("repoleved bew kcats lluf a ma I");
  });
});
