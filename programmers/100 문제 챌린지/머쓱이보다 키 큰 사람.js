/*
머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때,
머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(array, height) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

let array = [149, 180, 192, 170];
let height = 167;
console.log(solution(array, height));
