/*
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
*/

const solution = (array, n) =>
  +array
    .filter(
      (a) => Math.abs(a - n) === Math.min(...array.map((a) => Math.abs(a - n)))
    )
    .sort((a, b) => a - b)[0];

let array = [3, 10, 28];
let n = 20;
console.log(solution(array, n));
