/*백준 제출 코드
const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
*/

//두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

let A = 7;
let B = 3;

function calculator(A, B) {
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.floor(A / B)); //Math.floor() -> 소수점 버리기
  console.log(A % B);
}
calculator(A, B);
