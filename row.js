const fs = require("fs");
const readline = require("readline");

var rd = readline.createInterface({
  input: fs.createReadStream("./data.txt"),
  output: process.stdout,
  console: false,
});

let answer = 756008079;
let numbers = [];
let i = 17;
let start = 0;
let x;

rd.on("line", function (line) {
  if (start < i) {
    numbers.push(parseInt(line));
    start += 1;
  }
  //   console.log(numbers);

  if (numbers.reduce((a, b) => a + b) === answer) {
    x = numbers;
  }
  if (x === undefined) {
    numbers.shift();
    numbers.push(parseInt(line));
  } else {
    let y = Math.max.apply(Math, x) + Math.min.apply(Math, x);
    console.log(y);
  }
});
