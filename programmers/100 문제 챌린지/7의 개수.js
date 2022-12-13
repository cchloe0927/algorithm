/*
정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

const solution = (array) =>
  array
    .join("")
    .split("")
    .filter((a) => a === "7").length;
let array = [7, 77, 17];
console.log(solution(array));
