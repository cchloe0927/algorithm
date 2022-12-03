const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString();

//n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
function totalSum(input) {
  let answer = 0;
  for (let i = 1; i <= input; i++) {
    answer += +i;
  }
  console.log(answer);
}

totalSum(input);
