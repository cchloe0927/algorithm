//N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
//첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let count = input[0];
let nums = input[1].split(' ').map((item) => {
  return parseInt(item);
});
let max = nums[0];
let min = nums[0];
for (let i = 0; i < count; i++) {
  if (max < nums[i]) max = nums[i];
  if (min > nums[i]) min = nums[i];
}
console.log(min, max);

/*
//split은 문자열로 반환 -> [ '20', '10', '35', '30', '7' ]
let array = input[1].split(' ').map((item) => {
  //console.log(item);
  return parseInt(item);
});
//나머지 배열(스프레드 연산자) -> 배열을 복사
let max = Math.max(...array);
let min = Math.min(...array);
console.log(min, max);
*/
