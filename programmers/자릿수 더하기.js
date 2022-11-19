/* 문제
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
*/

//1. 유사 배열 객체인 문자열을 이용해서 푼 방법 1)
function solution(N) {
  let answer = 0;
  let str = String(N);
  //console.log(typeof str);
  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i]);
  }
  return answer;
}

N = 123;
console.log(solution(N)); //6
