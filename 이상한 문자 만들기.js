/* 문제
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

!제한사항!
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
*/

/*
//1. 공백을 만났을 때 count를 초기화 해서 연산
function solution(s) {
  //console.log(s.length); //15(공백 포함)
  let answer = '';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      if (count % 2 === 0) {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
      count++;
    } else {
      count = 0;
      answer += ' ';
    }
  }
  return answer;
}

s = 'try hello world';
console.log(solution(s)); //"TrY HeLlO WoRlD"
*/

//상식🤖
//유사 배열 객체란 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다.
//문자열은 마치 배열처럼 인덱스를 통해 각 문자에 접근할 수 있으며, length 프로퍼티를 갖기 때문에 유사 배열 객체이고 for문으로 순회할 수 도 있다.

//2. 공백으로 단어를 나눠주고 시작
function solution(s) {
  //console.log(s.length); //15(공백 포함)
  let answer = '';
  let words = s.split(' '); //split()메서드는 String 문자열을 'separator'라는 구분자를 기준으로 잘라 배열에 저장하여 리턴 -> [ 'try', 'hello', 'world' ]
  console.log(words);

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (j % 2 === 0) {
        answer += s[i][j].toUpperCase();
      } else {
        answer += s[i][j].toLowerCase();
      }
    }
  }
  return answer;
}

s = 'try hello world';
console.log(solution(s)); //"TrY HeLlO WoRlD"
