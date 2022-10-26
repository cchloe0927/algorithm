//총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
//console.log(input);

let N = Number(input[0]);
let target = input[2];
//console.log(N, target);

let nums = input[1].split(' ');
//console.log(nums);

let output = 0;
for (let i=0; i<N; i++) {
    //console.log(nums[i]);
    if(nums[i] === target) {
        output += 1;
    }
}
console.log(output);