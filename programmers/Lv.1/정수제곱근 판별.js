//임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n){
  let answer = 0;
  for(let i=0; i*i<=n; i++){
    if(i*i==n){
      i=i+1   //i++;
      answer = i*i;
    } else {
      answer = -1
    }
  }
  return answer;
}

// 아래는 테스트 코드입니다.
let n = 121
console.log(solution(n))


//for문의 조건문 중요! i<=n / i*i<=n인 거랑 완전히 결과가 다름