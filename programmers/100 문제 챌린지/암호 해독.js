/*
- 암호화된 문자열 cipher를 주고받습니다.
- 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (cipher, code) =>
  [...cipher].filter((a, i) => (i + 1) % code === 0).join("");

let cipher = "dfjardstddetckdaccccdegk";
let code = 4;
console.log(solution(cipher, code));
