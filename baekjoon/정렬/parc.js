//오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');
//console.log(input);

input.shift();
input.splice(1, 1);
//console.log(input);

let NM = input.join(' ').split(' ');
//console.log(NM);
let output = NM.sort((a, b) => a - b);
console.log(output.join(' '));
