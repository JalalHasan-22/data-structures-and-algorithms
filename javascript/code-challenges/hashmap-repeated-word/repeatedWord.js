function repeatedWord(str) {
  let array = [];
  // .toUpperCase to check case sensetive edge cases
  // .split to seperate the array into individual strings (/\W+/)<--removing all non-word characters
  let strArray = str.toLowerCase().split(/\W+/);
  console.log(strArray);
  let duplicate = null;
  // console.log(strArray)

  for (let i = 0; i < strArray.length; i++) {
    if (array.includes(strArray[i])) {
      duplicate = strArray[i];
      break;
    }
    array.push(strArray[i]);
  }
  // console.log(strArray)
  return duplicate;
}

module.exports = repeatedWord;
