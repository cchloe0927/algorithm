/* 문제
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

function solution(x) {
  let answer = true;
  let str = String(x);
  //console.log(typeof str);
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
    //console.log(sum);
  }
  if (x % sum == 0) {
    return answer;
  } else {
    return false;
  }
}

let arr = 13;
console.log(solution(arr)); //true

/*문제풀이
  while문 조건식의 평가 결과가 언제나 참이면 무한루프를 돌기 때문에 무한루프에서 탈출하기 위해서는 
  코드 블록 내에 if문으로 탈출 조건을 만들고 break문으로 코드블록을탈출한다.
*/
