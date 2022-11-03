//N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');
//console.log(input);

let arr = input.map((num) => Number(num));
arr.shift(); //배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
//console.log(arr);
let answer = arr.sort((a, b) => a - b);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}
