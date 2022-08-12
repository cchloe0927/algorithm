/* 백준제출 코드
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const input1 = (input[0] + input[1]) % input[2];
const input2 = ((input[0] % input[2]) + (input[1] % input[2])) % input[2];
const input3 = (input[0] * input[1]) % input[2];
const input4 = ((input[0] % input[2]) * (input[1] % input[2])) % input[2];

console.log(input1);
console.log(input2);
console.log(input3);
console.log(input4);
*/

//(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
//(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
//세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

let A = 5;
let B = 8;
let C = 4;

let input1 = (A + B) % C;
let input2 = ((A % C) + (B % C)) % C;
let input3 = ((A % C) * (A * B)) % C;
let input4 = (B % C) % C;

console.log(input1);
console.log(input2);
console.log(input3);
console.log(input4);
