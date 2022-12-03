//알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
console.log(input);

let str = input.toString();
console.log(str);

result = str.charCodeAt(0);
console.log(result);


//문제풀이
// 자바스크립트에서 문자를 아스키코드로 변환하는 메서드는 charCodeAt이다.
// "문자열".charCodeAt([문자열 자릿수]);
// 이 문제에선 한 줄에 한 문자만 입력되므로 문자열의 첫자리 (0)을 쓰면되니까 input.charCodeAt(0)이 적합한 답이다. 다만 지금처럼 문자가 하나면 input.charCodeAt()처럼 ()만 써도 된다.
// 반대로 아스키코드를 문자열로 바꿔주는 메서드는 String.fromCharCode(아스키코드값)