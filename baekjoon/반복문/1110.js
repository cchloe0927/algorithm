//더하기 사이클

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let inputValue = parseInt(input); //input값이 26일 경우

function solution(inputValue) {
  let count = 0;
  let num = inputValue;

  while (true) {
    let sum = parseInt((num % 10) + num / 10); // 2+6
    num = (num % 10) * 10 + (sum % 10); // 60+8
    count++;
    if (num === inputValue) break;
  }
  return count;
}

console.log(solution(inputValue));

// let num = String(input);
// for (let i = 0; ; i++) {
//   let num1 = parseInt(num[0]);
//   let num2 = parseInt(num[1]);
//   let sumNum = num1 + num2;
//   let result = String(num2) + String(sumNum);
//   console.log(result);

//   if (result === num) {
//     break;
//   }
// }
