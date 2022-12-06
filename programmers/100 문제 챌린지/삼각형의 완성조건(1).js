/**
 * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
 */

function solution(sides) {
  var answer = sides.sort((a, b) => b - a);
  if (answer[0] < answer[1] + answer[2]) {
    return 1;
  } else {
    return 2;
  }
}

let sides = [1, 2, 3];
console.log(solution(sides));
