//문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요. s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s){
  let answer = "";
  return s.split("").sort().reverse().join("")
  
}

// 아래는 테스트 코드입니다.
let s = "Zbcdefg"
console.log(solution(s))

//.sort() -> 값이 생략되면 배열의 element들은 문자열로 취급되어, 유니코드 값 순서대로 정렬