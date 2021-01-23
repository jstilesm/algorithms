// console.log(answer);

const fs = require("fs");
const readline = require("readline");

var rd = readline.createInterface({
  input: fs.createReadStream("./data.txt"),
  output: process.stdout,
  console: false,
});

let row = [0, 127];
let column = [0, 7];
let row_answer;
let column_answer;
let id;
let seats = [];

rd.on("line", function (line) {
  row = [0, 127];
  column = [0, 7];
  //   console.log(line);
  let first = line.slice(0, 7);

  for (let i = 0; i < first.length; i++) {
    // console.log(row);
    if (i === first.length - 1) {
      if (first[i] === "F") {
        row_answer = row[0];
      } else {
        row_answer = row[1];
      }
    } else if (first[i] === "F") {
      let new_row = Math.floor((row[0] + row[1]) / 2);
      row[1] = new_row;
      //   console.log(row);
    } else {
      let new_row = Math.floor((row[0] + row[1]) / 2);
      row[0] = new_row + 1;
    }
  }

  //   console.log(first);
  let second = line.slice(-3);
  //   console.log(second);
  for (let i = 0; i < second.length; i++) {
    // console.log(column);
    if (i === second.length - 1) {
      if (second[i] === "L") {
        column_answer = column[0];
      } else {
        column_answer = column[1];
      }
    } else if (second[i] === "L") {
      let new_column = Math.floor((column[0] + column[1]) / 2);
      column[1] = new_column;
    } else {
      let new_column = Math.floor((column[0] + column[1]) / 2);
      column[0] = new_column + 1;
    }
  }
  let id = row_answer * 8 + column_answer;
  seats.push(id);
  seats.sort(function (a, b) {
    return a - b;
  });
  let answer;
  if (line === "FBBBBFFRLL") {
    console.log(seats);
    for (let i = 7; i < 908; i++) {
      if (i > 7 && i < 907) {
        if (!seats.includes(i)) {
          answer = i;
        }
      }
    }
  }
  console.log(answer);
  console.log(seats.slice(-10));
});
