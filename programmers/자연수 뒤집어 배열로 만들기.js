/* 문제
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

function solution(n) {
  let answer = [];
  let str = String(n);
  console.log(typeof str, str);

  for (let i = 0; i < str.length; i++) {
    answer.push(Number(str[i]));
  }
  return answer.reverse();
}

n = 12345;
console.log(solution(n)); //[5,4,3,2,1]

//reverse() 메서드는 배열의 순서를 반전합니다.
//첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 된다.
