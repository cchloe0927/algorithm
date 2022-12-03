/*
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

if(input % 4 === 0) {
  if(input % 100 !== 0 || input % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
} else {
  console.log(0);
}
*/

function year(input) {
  if (input % 4 === 0) {
    if (input % 100 !== 0 || input % 400 === 0) {
      return 1;
    }
  } else {
    return 0;
  }
}

let input = 2000;
console.log(year(input));
