/* 문제
부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 
최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

- d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
- d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
- budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.
*/

//1. while문 문제 풀이
// function solution(d, budget) {
//   let dArr = d.sort((a, b) => a - b);
//   //console.log(dArr);
//   let sum = 0;
//   let count = 0;
//   while (sum <= budget) {
//     sum += dArr[count];
//     count++;
//   }
//   return count - 1;
// }

//2. for문 문제 풀이
function solution(d, budget) {
  let sum = 0;
  let count = 0;
  let dArr = d.sort((a, b) => a - b);
  //console.log(dArr);

  for (let i = 0; i < dArr.length; i++) {
    if (sum <= budget) {
      sum += dArr[i];
      count++;
    }
  }
  return count;
}

let d = [1, 3, 2, 5, 4];
let budget = 9;
console.log(solution(d, budget));

//문제 풀이
//오름차순 정렬 후 예산보다 작거나 같을 때까지 더한다.
//count를 세주고 return한다.
