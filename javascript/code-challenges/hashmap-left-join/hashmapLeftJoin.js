"use strict";
function hashMapLeftJoin(map1, map2) {
  let result = [];

  map1.forEach((value, key) => {
    let entry = [key, value];
    map2.get(key) ? entry.push(map2.get(key)) : entry.push(null);

    result.push(entry);
  });

  return result;
}

module.exports = hashMapLeftJoin;
