//문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다

const fs = require('fs');
const { stringify } = require('querystring');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
//console.log(input);

let caseCount = input[0];
let result = '';

for (let i=1; i<=caseCount; i++){
    //console.log(input[i]);
    let count = Number(input[i].split(' ')[0]);
    let cases = input[i].split(' ')[1];

    for (let j=0; j<cases.length; j++) {
        for (let k=0; k<count; k++) {
            result += cases[j]
        }
    }
    result += '\n'
}
console.log(result);