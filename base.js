const fs = require("fs");
const readline = require("readline");

var rd = readline.createInterface({
  input: fs.createReadStream("./data.txt"),
  output: process.stdout,
  console: false,
});

rd.on("line", function (line) {});
