//9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let numbers = input.map((num) => {
  return Number(num);
});
console.log(numbers);

let Max = numbers[0];
let Maxlocation = 0;

for (let i = 0; i < numbers.length; i++) {
  if (Max < numbers[i]) {
    Max = numbers[i];
    Maxlocation = i;
  }
}

console.log(Max);
console.log(Maxlocation + 1); //i는 0부터 시작하기 떄문에!

// let Max = Math.max(...numbers);
// console.log(Max);
