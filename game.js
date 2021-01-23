let answer;

console.log(answer);

const fs = require("fs");
const readline = require("readline");

var rd = readline.createInterface({
  input: fs.createReadStream("./data.txt"),
  output: process.stdout,
  console: false,
});
let valid = 0;
let invalid = false;
let fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

let colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
let letters = ["a", "b", "c", "d", "e", "f"];
rd.on("line", function (line) {
  if (line[0] !== undefined) {
    let values = line.split(" ");

    for (let i = 0; i < values.length; i++) {
      let key = values[i].slice(0, 3);
      let value = values[i].slice(4);

      for (let j = 0; j < fields.length; j++) {
        console.log(key);
        if (fields[j] === key) {
          if (key === "byr") {
            if (isNaN(value) || value > 2002 || value < 1920) {
              invalid = true;
            }
          }
          if (key === "iyr") {
            if (isNaN(value) || value > 2020 || value < 2010) {
              invalid = true;
            }
          }
          if (key === "eyr") {
            if (isNaN(value) || value > 2030 || value < 2020) {
              invalid = true;
            }
          }
          if (key === "hgt") {
            if (value.slice(-2) === "cm") {
              if (value.slice(0, -2) < 150 || value.slice(0, -2) > 193) {
                invalid = true;
              }
            } else if (value.slice(-2) === "in") {
              if (value.slice(0, -2) < 59 || value.slice(0, -2) > 76) {
                invalid = true;
              }
            } else {
              invalid = true;
            }
          }
          if (key === "hcl") {
            if (value[0] !== "#" || value.slice(1).length !== 6) {
              invalid = true;
            } else {
              let rest = value.slice(1);
              for (let z = 0; z < rest.length; z++) {
                if (!letters.includes(rest[z]) && isNaN(rest[z])) {
                  invalid = true;
                }
              }
            }
          }
          if (key === "ecl") {
            if (!colors.includes(value)) {
              invalid = true;
            }
          }
          if (key === "pid") {
            if (value.length === 9) {
              for (let i = 0; i < value.length; i++) {
                if (isNaN(value[i])) {
                  invalid = true;
                }
              }
            } else {
              invalid = true;
            }
          }
          fields.splice(j, 1);
          console.log(fields);
          if (fields.length === 0) {
            if (!invalid) {
              valid += 1;
            }
            // valid += 1;
            fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
            invalid = false;
          }
          //   console.log(hi);
        }
      }
    }
  } else {
    fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    invalid = false;
    // console.log("reset");
  }
  console.log(valid);
});

// console.log(trees);

// 68
// 268
// 73
// 75
// 31
