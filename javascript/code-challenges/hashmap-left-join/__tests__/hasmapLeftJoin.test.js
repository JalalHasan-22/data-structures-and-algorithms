"use strict";
const hashmapLeftJoin = require("../hashmapLeftJoin");

describe("", () => {
  let map1 = new Map();
  map1.set("foo", 1);
  map1.set("bar", 2);
  map1.set("qux", 3);
  map1.set("quux", 4);
  let map2 = new Map();
  map2.set("foo", "A");
  map2.set("fred", "B");
  map2.set("waldo", "C");
  map2.set("quux", "D");

  let map3 = new Map();
  map3.set("span", "A");
  map3.set("eggs", "B");
  map3.set("toast", "C");
  map3.set("ham", "D");

  it("can successfully left join 2 hashmaps and return the result as an array of arrays", () => {
    let joinedMaps = hashmapLeftJoin(map1, map2);

    expect(joinedMaps).toEqual([
      ["foo", 1, "A"],
      ["bar", 2, null],
      ["qux", 3, null],
      ["quux", 4, "D"],
    ]);
  });

  it("can successfully left join 2 hashmaps where there are no like values in right hashmap", () => {
    let joinedMaps = hashmapLeftJoin(map1, map3);

    expect(joinedMaps).toEqual([
      ["foo", 1, null],
      ["bar", 2, null],
      ["qux", 3, null],
      ["quux", 4, null],
    ]);
  });

  it("can handle 1 or 2 empty hashmaps", () => {
    let joinedMaps1 = hashmapLeftJoin(new Map(), new Map());
    let joinedMaps2 = hashmapLeftJoin(map1, new Map());

    expect(joinedMaps1).toEqual([]);
    expect(joinedMaps2).toEqual([
      ["foo", 1, null],
      ["bar", 2, null],
      ["qux", 3, null],
      ["quux", 4, null],
    ]);
  });

  it("can successfully left join 2 hashmaps where the 2nd hashmap's values all exist in the first hashmap", () => {
    let joinedMaps = hashmapLeftJoin(map1, map1);
    expect(joinedMaps).toEqual([
      ["foo", 1, 1],
      ["bar", 2, 2],
      ["qux", 3, 3],
      ["quux", 4, 4],
    ]);
  });
});
