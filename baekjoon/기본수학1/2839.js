//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

let fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString();
//console.log(typeof input, input);

let N = Number(input);
//console.log(typeof N, N);
let count = 0;

while (true) {
  if (N % 5 === 0) {
    count += N / 5;
    break;
  }

  N -= 3;
  count += 1;

  if (N < 0) {
    count = -1;
    break;
  }
}

console.log(count);
