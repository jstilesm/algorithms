const fs = require("fs");
const readline = require("readline");

var rd = readline.createInterface({
  input: fs.createReadStream("./data.txt"),
  output: process.stdout,
  console: false,
});

let total = 0;
let sum = 0;
let answers = {};
let lines;
let ammounts;

rd.on("line", function (line) {
  if (line[0] === undefined) {
    ammounts = Object.values(answers);
    for (let i = 0; i < ammounts.length; i++) {
      if (ammounts[i] === lines) {
        sum += 1;
      }
    }
    total += sum;
    sum = 0;
    lines = 0;
    answers = {};
  } else {
    for (let i = 0; i < line.length; i++) {
      if (answers[line[i]] === undefined) {
        answers[line[i]] = 1;
      } else {
        answers[line[i]] += 1;
      }
    }
    lines += 1;
  }
  console.log(total);
});
