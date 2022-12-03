/* 문제
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

-제한 조건-
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
*/

function solution(s, n) {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      //빈값을 만났을 때 빈값을 넣어줌
      answer += ' ';
      continue;
    }
    //대문자인경우 대문자 변수에서 찾고 아니면 소문자 변수에서 찾음
    let upperOrlower = upper.includes(s[i]) ? upper : lower;

    //찾은 문자열을 인덱스를 구해서 + n 더하기
    let index = upperOrlower.indexOf(s[i]) + n;
    //console.log(index);

    //만약 더한 인덱스가 할당한 문자열의 길이보다 길거나 같은 경우 인덱스에서 문자열의 길이를 빼줌
    if (index >= upperOrlower.length) {
      index -= upperOrlower.length;
    }
    answer += upperOrlower[index];
  }
  return answer;
}

let s = 'a B z';
let n = 4;
console.log(solution(s, n)); //"e F d"
