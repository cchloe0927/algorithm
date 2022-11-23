/* 문제
자연수 n이 매개변수로 주어집니다.
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
답이 항상 존재함은 증명될 수 있습니다.

제한사항
3 ≤ n ≤ 1,000,000
*/

//1. for문 문제 풀이
// function solution(n) {
//   for (let i = 2; i < n; i++) {
//     //제한사항 3부터 시작임으로 3의 나머지가 1이 될려면 2부터 나눠야 함!
//     if (n % i === 1) {
//       return i;
//     }
//   }
// }

//2. while문 문제 풀이
function solution(n) {
  let index = 2; //제한사항 3부터 시작임으로 3의 나머지가 1이 될려면 2부터 나눠야 함!
  while (n % index != 1) {
    index++;
  }
  return index;
}

let n = 10;
console.log(solution(n)); //3
