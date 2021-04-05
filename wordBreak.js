/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  if (s.length === 0) {
    return true;
  } else {
    let found = false;

    for (let i = 0; i < wordDict.length; i++) {
      if (s.includes(wordDict[i])) {
        found = true;
        s = s.replace(wordDict[i], "");
      }
    }
    if (s.length === 0) {
      return true;
    }
    if (found) {
      wordBreak(s, wordDict);
    } else {
      return false;
    }
  }
};

console.log(wordBreak("applepenapple", ["apple", "pen"]));
