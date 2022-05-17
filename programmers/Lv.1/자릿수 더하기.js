//자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요. 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n){
  let answer = 0;
  let a = String(n)
  for (let i=0; i<a.length; i++){
    answer += Number(a[i])
  }
  return answer
}

// 아래는 테스트 코드입니다.
let n = 123
console.log(solution(n))