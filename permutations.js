var numTilePossibilities = function (tiles) {
  if (tiles.length === 0) return 0;
  //   console.log(tiles);

  let count = 0;
  let possibles = new Set();

  for (let i = 0; i < tiles.length; i++) {
    if (possibles.has(tiles[i])) {
      continue;
    }
    count += numTilePossibilities(tiles.slice(0, i) + tiles.slice(i + 1)) + 1;
    possibles.add(tiles[i]);
  }

  return count;
};
console.log(numTilePossibilities("AAABBC"));
// console.log(x.filter(onlyUnique).length);

("AAB");

("A");
