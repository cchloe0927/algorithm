/*
정수 num1과 num2가 주어질 때, num1을 num2로 나눈 몫을 return하도록 soltuion 함수를 완성해주세요.
*/

function solution(num1, num2) {
  var answer = num1 / num2;
  return Math.floor(answer);
}

let num1 = 7;
let num2 = 2;
console.log(solution(num1, num2));

//Math.ceil() : 소수점 올림, 정수 반환
//Math.floor() : 소수점 버림, 정수 반환
//Math.round() : 소수점 반올림, 정수 반환
