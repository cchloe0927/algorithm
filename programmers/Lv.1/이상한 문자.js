//문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s){
  let answer = "";
  let count = 0;
  for(let i=0; i<s.length; i++){
    if(s[i]==""){ //s[i]가 공백을 만났을 때
      answer = "" //공백을 넣어주고
      count += 0; //카운트는 0으로 다시 설정 <- 공백을 기준별로 짝/홀수 인덱스를 판단
    } else {
      if(count%2==0){
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
      count += 1 //공백을 만나기 전까지 카운트는 계속 더해짐 <- 위치 중요!
    }
  }
  return answer;
}

// 아래는 테스트 코드입니다.
let s = "try hello world" //->"TrY HeLlO WoRlD"
console.log(solution(s))