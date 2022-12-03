//정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.
//첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)
//둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let inputs = [];
inputs = input[0].split(' ');
console.log(inputs);

let count = Number(inputs[0]);
let compare = Number(inputs[1]);
let num = [];
num = input[1].split(' ');
console.log(num);
let result = '';

for (let i = 0; i < count; i++) {
  if (Number(num[i]) < compare) {
    result += num[i] + ' ';
  }
}
console.log(result);
