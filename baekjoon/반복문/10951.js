//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  let A = parseInt(input[i].split(' ')[0]);
  let B = parseInt(input[i].split(' ')[1]);
  let result = A + B;

  if (!result) {
    break;
  } else {
    console.log(result);
  }
}
