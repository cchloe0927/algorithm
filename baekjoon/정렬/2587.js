//다섯 개의 자연수가 주어질 때 이들의 평균과 중앙값을 구하는 프로그램을 작성하시오.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt') // "/dev/stdin"
  .toString()
  .trim()
  .split('\n');
//console.log(input);

let N = input.map((num) => Number(num));

let sum = 0;
let average = 0;
for (let i = 0; i < N.length; i++) {
  sum += N[i];
  average = sum / N.length;
}
console.log(average);

let array = N.sort((a, b) => a - b);
let centerNum = array[parseInt(array.length / 2)];
console.log(centerNum);
