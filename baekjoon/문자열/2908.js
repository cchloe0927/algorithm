//상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
//두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.



// const fs = require('fs');
// const { stringify } = require('querystring');
// let input = fs
//   .readFileSync(__dirname + '/input.txt')
//   .toString()
//   .split('\n');

// let num1 = Number(input[0].split(' ')[0].split('').reverse().join(''));
// let num2 = Number(input[0].split(' ')[1].split('').reverse().join(''));
// console.log(num1>num2?num1:num2);



//위에 코드는 런타임에러 발생 -> input 값 불러오는 부분을 ' ' 띄어쓰기로 수정해서 나눠줌
const fs = require('fs');
const { stringify } = require('querystring');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ');

let num1 = Number(input[0].split('').reverse().join(''));
let num2 = Number(input[1].split('').reverse().join(''));

console.log(num1>num2?num1:num2);