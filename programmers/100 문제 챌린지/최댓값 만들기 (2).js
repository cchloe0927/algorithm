/**
정수 배열 numbers가 매개변수로 주어집니다.
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  const BruteForce = [];
  // 모든 경우의 수를 구함
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        BruteForce.push(numbers[i] * numbers[j]);
      }
    }
  }

  //최댓값 출력
  return Math.max(...BruteForce);
}

let numbers = [1, 2, -3, 4, -5];
console.log(solution(numbers));
