//배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt') // "/dev/stdin"
  .toString()
  .trim()
  .split('')
  .map((num) => Number(num));
//console.log(input);

input.sort((a, b) => b - a);
console.log(input.join(''));

//split() 메서드 : 하위 문자열의 정렬된 목록으로 나누고 이러한 하위 문자열을 배열에 넣고 배열을 반환
//join() 메서드 : 배열의 모든 요소를 연결해 하나의 문자열로 만듦
//* separator : 배열의 각 요소를 구분할 문자열을 지정합니다. 이 구분자는 필요한 경우 문자열로 변환됩니다. 생략하면 배열의 요소들이 쉼표로 구분됩니다
