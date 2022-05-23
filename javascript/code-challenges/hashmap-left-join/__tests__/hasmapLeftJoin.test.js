"use strict";
const hashmapLeftJoin = require("../hashmapLeftJoin");

describe("", () => {
  let map1 = new Map();
  map1.set("diligent", "employed");
  map1.set("fond", "enamored");
  map1.set("guide", "usher");
  map1.set("outfit", "garb");
  map1.set("wrath", "anger");
  let map2 = new Map();
  map2.set("diligent", "idle");
  map2.set("fond", "averse");
  map2.set("guide", "follow");
  map2.set("flow", "jam");
  map2.set("wrath", "delight");

  it("can successfully left join 2 hashmaps and return the result as an array of arrays", () => {
    let joinedMaps = hashmapLeftJoin(map1, map2);

    expect(joinedMaps).toEqual([
      ["diligent", "employed", "idle"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
      ["outfit", "garb", null],
      ["wrath", "anger", "delight"],
    ]);
  });

  it("can handle 1 or 2 empty hashmaps", () => {
    let joinedMaps1 = hashmapLeftJoin(new Map(), new Map());
    let joinedMaps2 = hashmapLeftJoin(map1, new Map());

    expect(joinedMaps1).toEqual([]);
    expect(joinedMaps2).toEqual([
      ["diligent", "employed", null],
      ["fond", "enamored", null],
      ["guide", "usher", null],
      ["outfit", "garb", null],
      ["wrath", "anger", null],
    ]);
  });

  it("can successfully left join 2 hashmaps where the 2nd hashmap's values all exist in the first hashmap", () => {
    let joinedMaps = hashmapLeftJoin(map1, map1);
    console.log(joinedMaps);
    expect(joinedMaps).toEqual([
      ["diligent", "employed", "employed"],
      ["fond", "enamored", "enamored"],
      ["guide", "usher", "usher"],
      ["outfit", "garb", "garb"],
      ["wrath", "anger", "anger"],
    ]);
  });
});
