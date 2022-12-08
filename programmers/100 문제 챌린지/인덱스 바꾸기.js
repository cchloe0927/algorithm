/*
my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(my_string, num1, num2) {
  const result = [...my_string];
  // num 간의 문자열을 변환함
  result.splice(num1, 1, my_string[num2]);
  result.splice(num2, 1, my_string[num1]);
  return result.join("");
}

let my_string = "hello";
let num1 = 1;
let num2 = 2;
console.log(solution(my_string, num1, num2));
