//알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
//첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

const fs = require('fs');
const { stringify } = require('querystring');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
//console.log(input);

let inputStr = String(input)
let inputUpper = inputStr.toUpperCase()
console.log(inputUpper);

//fromCharCode 사용해서 문제 풀이 





