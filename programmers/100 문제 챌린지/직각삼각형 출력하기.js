/*
"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.
정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const num = Number(input[0]);
  let logStr = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      logStr += '*';
    }
    logStr += '\n';
  }
  console.log(logStr);
});

// function solution(n) {
//   let star = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       star += '*';
//     }
//     star += '\n';
//   }
//   return star;
// }

// let n = 3;
// console.log(solution(n));
