/*문제
다음 예제와 같이 삼각형 모양으로 ‘*’을 출력하세요.
*/

function solution(star) {
  let answer = '';
  //문단 넘기는 전체 for문
  for (let i = 1; i <= star; i++) {
    //빈 공백 값 넣기
    for (let j = star - 1; j >= i; j--) {
      answer += ' ';
    }
    //별 넣기
    for (let k = 1; k <= i * 2 - 1; k++) {
      answer += '*';
    }
    answer += '\n';
  }
  console.log(answer);
}

let star = 9;
solution(star);

/*문제풀이
1. for1) 문단 넘기기
2. for2-1) 공백 넣기
3. for2-1) 별 찍기
*/
