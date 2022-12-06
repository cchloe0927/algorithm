/**
 * my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (my_string) =>
  [...my_string]
    .filter((a) => !Number.isNaN(+a))
    .reduce((a, b) => a + Number(b), 0);

let my_string = "aAb1B2cC34oOp";
console.log(solution(my_string));
