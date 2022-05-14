"use strict";

const HashTable = require("../hashtable");

describe("Testing the Hashtable", () => {
  const myHash = new HashTable(1024);

  it("Testing the hash() method", () => {
    expect(myHash.hash("Jalal")).toEqual(124);
    expect(myHash.hash("Omar")).toEqual(409);
    expect(myHash.hash("Ahmad")).toEqual(877);
  });

  it("Testing the set() algorithm", () => {
    myHash.set("Jalal", "Software Developer");

    expect(myHash.table[124]).toBeDefined();
    expect(myHash.table[124]).toBeInstanceOf(Object);
    expect(myHash.table[124].head.value).toEqual({
      Jalal: "Software Developer",
    });
  });

  it("Testing the get() method", () => {
    myHash.set("Omar", "Police Officer");
    expect(myHash.get("Omar")).toEqual("1- Omar : Police Officer. ");
    expect(myHash.get("Jalal")).toEqual("1- Jalal : Software Developer. ");
    expect(myHash.get("Qusay")).toBeNull();
  });

  it("Testing the contains method", () => {
    expect(myHash.contains("Jalal")).toStrictEqual(true);
    expect(myHash.contains("Anas")).toStrictEqual(false);
    expect(myHash.contains("Omar")).toStrictEqual(true);
    expect(myHash.contains("Ayham")).toStrictEqual(false);
  });

  it("Testing the keys() method", () => {
    expect(myHash.keys()).toEqual(["Jalal", "Omar"]);
  });
});
