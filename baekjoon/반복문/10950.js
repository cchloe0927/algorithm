const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let arr = input;
for (let i = 1; i < arr.length; i++) {
  newArr = arr[i].split(' ').map((item) => Number(item));
  sum = newArr[0] + newArr[1];
  console.log(sum);
}
