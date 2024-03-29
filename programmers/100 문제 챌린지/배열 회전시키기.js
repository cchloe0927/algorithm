/**
 * 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
 * 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
 */

function solution(numbers, direction) {
  var answer = [];
  numbers.map((x, i) => {
    let next =
      direction == "right"
        ? numbers[(i - 1 + numbers.length) % numbers.length]
        : numbers[(i + 1) % numbers.length];
    answer.push(next);
  });
  return answer;
}

let numbers = [1, 2, 3];
let direction = "right";
console.log(solution(numbers, direction));
