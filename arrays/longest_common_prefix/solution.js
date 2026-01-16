function longestCommonPrefix(strs) {
  let tempLongest = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (!strs[i].startsWith(tempLongest)) {
      tempLongest = tempLongest.substring(0, tempLongest.length - 1);
    }
  }
  return tempLongest;
}

let strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
