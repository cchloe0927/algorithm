//각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ');
//console.log(input);
let N = input.map((num) => Number(num));

let climb = N[0];
let slipped = N[1];
let goal = N[2];

let days = Math.ceil((goal - slipped) / (climb - slipped));
console.log(days);
