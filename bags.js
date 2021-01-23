const fs = require("fs");
const readline = require("readline");

var rd = readline.createInterface({
  input: fs.createReadStream("./data.txt"),
  output: process.stdout,
  console: false,
});
const lines = [];
const colors = [];
const skips = [];
let parts;
let outer;
const outer_bags = ["shiny gold"];

let intial_length;
// console.log(rd.history);

rd.on("line", function (line) {
  lines.push(line);
});
// console.log(lines);

rd.on("close", function () {
  //   console.log(lines);
  for (let x = 0; x < lines.length; x++) {
    const line = lines[x];
    x = process_line(line, x);
    // console.log(x);
    // console.log(outer_bags);
  }
  console.log(outer_bags.length - 1);
});

function process_line(line, x) {
  //   console.log(rd);
  parts = String(line).split(" bag");
  //   console.log(parts);
  for (let i = 0; i < parts.length - 1; i++) {
    if (i === 0) {
      outer = parts[i];
    } else {
      for (let j = 0; j < outer_bags.length; j++) {
        if (
          parts[i]
            .split(" ")
            .slice(-2)[0]
            .concat(" " + parts[i].split(" ").slice(-1)) === outer_bags[j]
        ) {
          if (skips.includes(x)) {
            return x;
          } else if (!outer_bags.includes(outer)) {
            outer_bags.push(outer);
            skips.push(x);
            // console.log(outer_bags);
            // console.log(outer_bags.length - 1);
            // console.log("HI");
          }
          return 0;
        }
      }
    }
  }
  return x;
}
