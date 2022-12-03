/* 문제
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
*/

function solution(n) {
  return Number(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

n = 118372;
console.log(solution(n)); //873211

//Number(): 문자열을 숫자로 바꾸기
//String(): 문자로 변경
//.split(''): String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
//.join(''): ''빈문자열로 배열합치기
