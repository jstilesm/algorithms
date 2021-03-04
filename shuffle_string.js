/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let string = "";
  let char = 0;
  for (let i = 0; char < indices.length; i++) {
    for (let j = 0; j < indices.length; j++) {
      if (indices[j] === char) {
        string = string.concat(s.charAt(j));
        char += 1;
      }
    }
  }
  return string;
};
