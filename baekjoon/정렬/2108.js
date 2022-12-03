//다섯 개의 자연수가 주어질 때 이들의 평균과 중앙값을 구하는 프로그램을 작성하시오.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt') // "/dev/stdin"
  .toString()
  .trim()
  .split('\n')
  .map((num) => Number(num));
//console.log(input);

const N = input.shift();
//console.log(N);
//console.log(input);

//산술평균
let sum = 0;
for (let i = 1; i < N; i++) {
  sum += input[i];
}
console.log((sum / N).toFixed());
//중앙값
let sortArr = input.sort();
//console.log(center);
console.log(sortArr[Math.floor(5 / 2)]);
//최빈값
//나중에 도전

//범위
console.log(sortArr[N - 1] - sortArr[0]);
