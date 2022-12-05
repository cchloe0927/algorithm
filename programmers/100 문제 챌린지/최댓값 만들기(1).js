/* 문제
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  var answer = numbers.sort((a, b) => b - a);
  answer = answer[0] * answer[1];
  return answer;
}

let numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers)); //20
