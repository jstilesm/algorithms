var getKth = function (lo, hi, k) {
  const powers = [];
  for (let j = lo; j < hi + 1; j++) {
    powers.push([findPower(j, 0), j]);
  }
  powers.sort(function (a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;

    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
  });

  return powers;
};

var findPower = function (integer, steps) {
  if (integer === 1) {
    return 0;
  }
  if (integer % 2 === 0) {
    integer = integer / 2;
    steps += 1;
    return 1 + findPower(integer, steps);
  } else {
    integer = 3 * integer + 1;
    steps += 1;
    return 1 + findPower(integer, steps);
  }
};

console.log(getKth(10, 20, 5));
