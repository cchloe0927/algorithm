/* 문제
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요
*/

function solution(n) {
  let answer = n.toString(3).split('').reverse().join('');
  return parseInt(answer, 3); //3진수가 되어있는 값을 본래의 10진법인 값의 정수로 만들어줌!
}

let n = 45;
console.log(solution(n)); //7

//toString()
//문자열을 반환하는 object의 대표적인 방법이다.
//숫자 및 BigInts의 경우 toString()은 선택적으로 기수(radix)를 매개변수로 취합니다.
//기수의 값은 최소 2부터 36까지입니다. 기수를 이용함으로써 10진수를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있습니다.

//parseInt()
//function parses a string argument and returns an integer of the specified radix
//An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string
