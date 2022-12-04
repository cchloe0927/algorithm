/**
 * 정수 배열 num_list와 정수 n이 매개변수로 주어집니다.
 * num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
 */

function solution(num_list, n) {
  // 정답배열 생성
  const result = [];
  // 전 범위 순환
  for (let i = 0; i < num_list.length; ) {
    const sliceN = [];
    // n만큼 배열 생성
    for (let j = 0; j < n; j++) {
      sliceN.push(num_list[i]);
      i++;
    }
    result.push(sliceN);
  }
  return result;
}

let num_list = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 2;
console.log(solution(num_list, n));
