/**
글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며,
편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(message) {
  var answer = message.length * 2;
  return answer;
}

let message = "happy birthday!";
console.log(solution(message));
