/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let position = [0, 0];

  let direction = "north";

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === -1) {
      if (direction === "north") {
        direction = "east";
        continue;
      }
      if (direction === "west") {
        direction = "north";
        continue;
      }
      if (direction === "south") {
        direction = "west";
        continue;
      }
      if (direction === "east") {
        direction = "south";
        continue;
      }
    } else if (commands[i] === -2) {
      if (direction === "north") {
        direction = "west";
        continue;
      }
      if (direction === "west") {
        direction = "south";
        continue;
      }
      if (direction === "south") {
        direction = "east";
        continue;
      }
      if (direction === "east") {
        direction = "north";
        continue;
      }
    } else {
      let stop = false;
      for (let j = 0; j < commands[i]; j++) {
        const previous = [...position];
        if (direction === "north") {
          position[1] += 1;
        }
        if (direction === "south") {
          position[1] -= 1;
        }
        if (direction === "east") {
          position[0] += 1;
        }
        if (direction === "west") {
          position[0] -= 1;
        }

        for (let z = 0; z < obstacles.length; z++) {
          if (
            obstacles[z][0] === position[0] &&
            obstacles[z][1] === position[1]
          ) {
            stop = true;
            position = previous;
            break;
          }
        }
        if (stop) {
          break;
        }
      }
    }
  }
  return Math.pow(position[0], 2) + Math.pow(position[1], 2);
};
console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]));

console.lo;
