//N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

const fs = require('fs');
const { stringify } = require('querystring');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
//console.log(input);

let sumcount = Number(input[0]);
//console.log(sumcount);
let strN = input[1].split('');
//console.log(N);;

let sum = 0;
for (let i=0; i<strN.length; i++) {
    //console.log(strN[i]);
    sum += Number(strN[i])
}
console.log(sum);