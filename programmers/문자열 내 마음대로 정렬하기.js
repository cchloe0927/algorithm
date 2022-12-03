/* 문제
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 
각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) {
      // 두 값을 비교해서 반환 값이 > 0 , b가 a보다 앞으로 온다.
      return 1;
    } else if (a[n] < b[n]) {
      //반대로 반환 값이 <= 0 , a가 앞으로 즉, 순서의 변함이 없다.
      return -1;
    } else {
      //비교값이 동일 시에는 사전순으로 앞선 문자열로 순서를 설정한다.
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return strings;
}

let strings = ['sun', 'bed', 'car'];
let n = 1;
console.log(solution(strings, n)); //["car", "bed", "sun"]
