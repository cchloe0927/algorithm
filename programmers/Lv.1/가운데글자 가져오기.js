//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s){
  let answer = 0;
  for(let i=0; i<s.length; i++){
    if(s.length%2===0){
      answer = s[s.length/2-1] + s[s.length/2]
    } else {
      answer = s[s.length/2-0.5]
    }
  }
  return answer
}

// 아래는 테스트 코드입니다.
let s = "qwer"
console.log(solution(s))




