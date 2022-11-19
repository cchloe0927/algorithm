/* 문제
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
*/

//while문 쓰고 푸는법
function solution(n) {
  let answer = 0;
  let x = 0;
  while (x * x < n) {
    x++;
    if (x * x === n) {
      x++;
      answer = x * x;
      break;
    } else {
      answer = -1;
    }
  }
  return answer;
}

let n = 121;
console.log(solution(n)); //144

/*
//for문 쓰고 푸는법
function solution(n) {
  let answer = 0;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      i++;
      answer = i * i;
    } else {
      answer = -1;
    }
  }
  return answer;
}

let n = 121;
console.log(solution(n)); //144
*/
