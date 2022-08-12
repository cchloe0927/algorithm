/* 백준 제출 코드
const fs=require('fs');
const [input1, input2]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const numberOfDigits = input2 % 10;
const tensOfDigit = Math.floor((input2 % 100) / 10);
const hundredsOfDigits = Math.floor(input2 / 100);

console.log(input1 * numberOfDigits);
console.log(input1 * tensOfDigit);
console.log(input1 * hundredsOfDigits);
console.log(input1 * input2);
*/

//(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
//(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

const input1 = 472;
const input2 = 385;

const numberOfDigits = input2 % 10; //나머지 5출력
const tensOfDigit = Math.floor((input2 % 100) / 10);
const hundredsOfDigits = Math.floor(input2 / 100);

console.log(input1 * numberOfDigits);
console.log(input1 * tensOfDigit);
console.log(input1 * hundredsOfDigits);
console.log(input1 * input2);
