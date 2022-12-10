/**
문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (s1, s2) => s1.filter((a, i) => s2.includes(a)).length;

let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];
console.log(solution(s1, s2));
