//A+B-8 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let result = '';
for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(' ');
  let number1 = input[i].split(' ')[0];
  let number2 = input[i].split(' ')[1];
  result += `Case #${i}: ${number1} + ${number2} = ${
    Number(numbers[0]) + Number(numbers[1])
  }\n`;
}
console.log(result);
