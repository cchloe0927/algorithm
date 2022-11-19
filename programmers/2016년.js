/* 문제
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

2016년은 윤년입니다.
*/

function solution(a, b) {
  let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let weeks = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let count = 0;
  let answer = 0;

  for (let i = 0; i < a - 1; i++) {
    count += months[i]; //원하는 월까지 더해주고
    //console.log(count);
  }
  count = count + b; //해당 월해서 원하는 일까지 더해주고나서
  answer = weeks[count % 7]; //요일이 시작하는 인덱스 순으로 배열을 만든 다음 한 주를 나누고 난 나머지를 인덱스로 지정해줌
  return answer;
}

a = 5;
b = 24;
console.log(solution(a, b)); //"TUE"

/*풀이설명
a월까지의 b일을 전체 더해서 한 주(7)로 나눈 나머지를 통해서 해당 요일을 계산함
요일 순서는 이해하기 쉽게 2016년 1월 1일이 금요일로 시작하기 떄문에
인덱스가 1일때 'FRI'를 시작으로 배열을 구성함!
*/
