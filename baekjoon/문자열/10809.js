//알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

const fs = require('fs');
const { stringify } = require('querystring');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
//console.log(input);

let resultArr = [];
let result = '';

for (let i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i); //String.fromCharCode() 메서드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환

  for (let j = 0; j < input.length; j++) {
    resultArr.push(input[j].indexOf(alphabet)); //indexOf : 특정 위치의 문자를 찾아서 문자의 인덱스를 불러옴
  }
}

result = resultArr.join(' ');
console.log(result);
