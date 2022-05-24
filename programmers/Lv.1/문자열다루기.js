//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s){
  let answer = false;
  for(let i=0; i<s.length; i++){
    if(s.length==4||s.length==6){
      if(isNaN(s) == true){
        answer = false;
        break;
      } else {
        answer = true;
      }
    }
  }
  return answer;
}

// 아래는 테스트 코드입니다.
let s = "a234"
console.log(solution(s))

//isNaN() - 매개변수가 숫자인지 검사하는 함수(NaN은 Not a Number입니다.)