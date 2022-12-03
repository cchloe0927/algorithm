/*
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
  var answer = Array.from(my_string).reverse().join('');
  return answer;
}

let my_string = 'jaron';
console.log(solution(my_string));

//Array.from
//유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만듭니다.
