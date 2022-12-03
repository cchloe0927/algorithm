//N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
//첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((num) => Number(num));
input.shift();
//console.log(input);

input.sort((a, b) => a - b);
console.log(input.join('\n'));

//처음에 메모리 제한으로 실패 -> 입력조건 잘 살펴보고 1,000,000 데이터가 얼마나 데이터용량을 차지하는지 생각할 것!
