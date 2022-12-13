/*
str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
*/

function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}

let str1 = "ab6CDE443fgh22iJKlmn1o";
let str2 = "6CD";
console.log(solution(str1, str2));
