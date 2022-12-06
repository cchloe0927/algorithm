/**
 * 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
  const smallNumber = [];
  let idx = 2;
  // n이 0이 될때까지
  while (n !== 1) {
    // n의 약수라면 배열에 추가
    if (n % idx === 0) {
      smallNumber.push(idx);
      n /= idx;
      idx = 2;
    } else {
      idx += 1;
    }
  }
  // 중복 제거하여 반환
  return Array.from(new Set(smallNumber));
}

let n = 12;
console.log(solution(n));
