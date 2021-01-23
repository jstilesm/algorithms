const fs = require("fs");
const readline = require("readline");

// var math_it_up = {
//     '+': function (x, y) { return x + y },
//     '-': function (x, y) { return x - y }
// }​​​​​​​

var rd = readline.createInterface({
  input: fs.createReadStream("./data.txt"),
  output: process.stdout,
  console: false,
});

const lines = [];
let passed = [];
const special_passed = [];
const checked_passed = [];
let code;
let number;
let parts;
let accumulator = 0;
let changed = false;

rd.on("line", function (line) {
  lines.push(line);
});

// console.log(lines);
rd.on("close", function () {
  //   console.log(lines[301]);
  for (let x = 0; x < lines.length; x++) {
    const line = lines[x];
    parts = line.split(" ");
    code = parts[0];
    number = parts[1];
    x = process_line(line, x);
    if (x === undefined) {
      x = 0;
      passed = [];
      accumulator = 0;
      for (let i = 0; i < special_passed.length; i++) {
        if (!checked_passed.includes(special_passed[i])) {
          let next = special_passed[i];

          if (code === "nop") {
            code = "jwp";
            lines[x] = code + " " + number;
          } else if (code === "jwp") {
            code = "nop";
            lines[x] = code + " " + number;
          }
          checked_passed.push(special_passed[i]);
        }
      }
    }
    console.log(accumulator);
  }
  console.log(accumulator);
});

function process_line(line, x) {
  parts = line.split(" ");
  code = parts[0];
  number = parts[1];

  //   console.log(parts);

  if (String(code) === "acc") {
    console.log("helloacc");
    if (!passed.includes(x)) {
      passed.push(x);

      accumulator = eval(accumulator + number);
      return x;
    } else {
      return undefined;
    }
  } else if (String(code) === "jmp") {
    console.log("hellojwp");
    if (!passed.includes(x)) {
      passed.push(x);
      special_passed.push(x);
      x = eval(x + number);
      //   console.log(x - 1);
      return x - 1;
    } else {
      return undefined;
    }
  } else {
    if (!passed.includes(x)) {
      passed.push(x);
      special_passed.push(x);
      return x;
    } else {
      return undefined;
    }
  }
}
