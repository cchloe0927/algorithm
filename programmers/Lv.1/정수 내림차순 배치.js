//함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n){
  let answer = String(n)
  return Number(answer.split('').sort((a,b)=>b-a).join(''));
}

// 아래는 테스트 코드입니다.
let n = 118372
console.log(solution(n))

//String -> 숫자를 문자로 변환
//split('') -> ''로 배열을 만들어줌
//sort(화살표함수/오름차순) -> 정렬
//join('') -> ''배열을 다시 합침
//Number -> 문자를 숫자로 변환