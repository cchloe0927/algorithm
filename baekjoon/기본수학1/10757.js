//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ');
console.log(input);

//BigInt는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형
//BigInt를 출력할 때에는 toString()으로 출력해야 한다. 그렇지 않다면 끝에 n이 붙어서 나오기 때문
const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);
let anwser = num1 + num2;
console.log(anwser.toString());

// const num1 = Number(input[0]);
// const num2 = Number(input[1]);
// console.log(num1);
// console.log(num2);
// console.log(num1 + num2);
