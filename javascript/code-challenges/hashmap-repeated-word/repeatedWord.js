const HashTable = require("../hashtable/hashtable");

function repeatedWord(str) {
  const newHashMap = new HashTable(1024);
  // .toUpperCase to check case sensetive edge cases
  // .split to seperate the array into individual strings (/\W+/)<--removing all non-word characters
  let strArray = str.toLowerCase().split(/\W+/);
  let duplicate = null;

  for (let i = 0; i < strArray.length; i++) {
    if (newHashMap.contains(strArray[i])) {
      duplicate = strArray[i];
      break;
    }
    newHashMap.set(strArray[i], strArray[i]);
  }
  return duplicate;
}

module.exports = repeatedWord;
