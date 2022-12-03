/* 문제
기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.
*/

function solution(month, day) {
  let monthOutput = '';
  let dayOutput = '';
  let count = 98 + day; //116
  let finalMonth = 0;
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //i의 인덱스 번호  0   1   2   3   4   5   6   7   8   9  10  11

  for (let i = month - 1; count > 0; i++) {
    finalMonth = i % months.length; //0
    count -= months[finalMonth]; //116 - 31 - 28 - 31 = 26
    if (count < 0) {
      count += months[finalMonth]; //-4가 되기 때문에 다스 months[3]의 값을 더해 줘서 26으로 만듦
      monthOutput += finalMonth + 1; //finalMonth: 3 인덱스 번호는 0부터 시작함으로 + 1 해서 해당 월 수 를 출력함
      dayOutput += count;
      return `'${monthOutput}월 ${dayOutput}일'`;
    }
  }
}

let month = 1;
let day = 18;
console.log(solution(month, day)); //‘4월 26일’

//문제 풀이
//주어진 출력 값을 이용해서 하나씩 대입해 보면서 풀이
//월이 0 미만이 되는 순가 해당 월이기 떄문에 조건문을 count라는 변수를 줘서 설정해 주고
//조건문 안에서 인덱스를 계산해보면서 해당 월과 요일을 출력함
