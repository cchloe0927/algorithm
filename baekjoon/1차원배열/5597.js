//교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
//console.log(input);

const nums = input.map((num) => Number(num));
//console.log(nums);

let noSubmotStudent = [];
for (let i = 1; i <= 30; i++) {
  if (!nums.includes(i)) {
    noSubmotStudent.push(i);
  }
}
console.log(noSubmotStudent.join('\n'));
