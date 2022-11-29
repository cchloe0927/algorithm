/*
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
*/

function solution(price) {
  var answer = 0;
  if (price >= 100000 && price < 300000) {
    answer = price * 0.95;
  } else if (price >= 300_000 && price < 500000) {
    answer = price * 0.9;
  } else if (price >= 500000) {
    answer = price * 0.8;
  } else {
    answer = price;
  }
  return parseInt(answer); //소수점 제거
}

let price = 580000;
console.log(solution(price));
