/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

var countSubstrings = function (s, t) {
  // set count
  let count = 0;
  // array to stop double counts
  const counted = [];

  // loop to check non matching characters

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] !== t[j]) {
        counted.push(s[i], t[j]);
        count += 1;
      }
    }
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const s_substrings = allSubstrings(s);
  const t_substrings = allSubstrings(t);

  for (let i = 0; i < s_substrings.length; i++) {
    if (t_substrings[i] === undefined) {
      return count;
    }
    let frontS = s_substrings[i].slice(0, -1);
    let backS = s_substrings[i].slice(1);
    let frontT = t_substrings[i].slice(0, -1);
    let backT = t_substrings[i].slice(1);

    if (s_substrings[i].length > 1 && t_substrings[i].length > 1) {
      if (backS === backT) {
        if (!counted.includes(backS) || !counted.includes(backT)) {
          count += 1;
          console.log(backS);
          counted.push(backS, backT);
        }
      } else if (frontS === frontT) {
        if (!counted.includes(frontS) || !counted.includes(frontT)) {
          count += 1;
          counted.push(frontS, frontT);
        }
      }
    }
  }

  return count;
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function allSubstrings(str) {
  const substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings.filter(onlyUnique);
}

console.log(countSubstrings("ab", "bb"));
