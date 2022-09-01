const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let total = Number(input[0]); //첫번째 방법 : input값을 숫자로 바꿔주는
let count = +input[1]; //두번째 방법 : input값을 숫자로 바꿔주는
let sum = 0;
for (let i = 2; i <= count + 1; i++) {
  newArr = input[i].split(' ').map((item) => Number(item));
  sum += newArr[0] * newArr[1];
}
console.log(total === sum ? 'Yes' : 'No');
