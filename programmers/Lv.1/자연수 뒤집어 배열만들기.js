//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n){
  let answer = [];    //빈배열 만들기
  let a = String(n)   //문자열 변환
  //console.log(typeof(answer))
  for(let i=0; i<a.length; i++){
    answer.push(Number(a[a.length-1-i]));  //길이 ==! 인덱스수
  }
  return answer;
}

// 아래는 테스트 코드입니다.
let n = 12345
console.log(solution(n))
