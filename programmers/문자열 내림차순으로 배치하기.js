/* 문제
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
*/

function solution(s) {
  //console.log(s); //먼저 문자열을 배열로 만들어야 sort() 함수를 사용할 수 있음
  let answer = s.split('').sort().reverse().join('');
  //console.log(arr);
  return answer;
}

let s = 'Zbadefg';
console.log(solution(s)); //"gfedcbZ"

//sort() 문자열을 일정한 구분으로 잘라서 배열로 변환
//sort()에 파라미터를 전달하지 않으면 배열 요소들이 문자열 취급되어 유니코드 값 순서대로 정렬됨

//reverse() 배열의 순소를 반환
//문제의 답은 큰것부터 작은 순으로 정렬해야 하기때문에 유니코드 값을 반대로 해줌

//join() 모든 배열요소가 문자열로 반환된 다음 하나의 문자열로 연결 ''를 구분자로 연결해줌
