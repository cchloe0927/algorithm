/*
 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때,
 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
*/

const solution = (order) =>
  [...(order + "")].filter((a) => ["3", "6", "9"].includes(a)).length;

let order = 29423;
console.log(solution(order));
