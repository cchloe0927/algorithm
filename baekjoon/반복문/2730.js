/* 백준 제출 코드
let input = require('fs').readFileSync('/dev/stdin').toString();
let num = Number(input[0]);

for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
*/

//N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
//첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

let input = 2;

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
