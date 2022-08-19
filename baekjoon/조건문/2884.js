/* 백준 제출 코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  let input = line.split(' ');

  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  
  if (num2 - 45 < 0) {
    num2 = 60 + (num2 - 45);
    num1 -= 1;

    if (num1 === -1) {
      num1 = 23;
    }
  } else {
    num2 -= 45;
  }

  console.log(num1 + ' ' + num2);
}).on('close', function () {
  process.exit();
});
*/

//알람시계
//원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.
//현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

function alram(input1, input2) {
  if (input2 - 45 < 0) {
    input2 = 60 + (input2 - 45);
    input1 -= 1;
    if (input1 === -1) {
      input1 = 23;
    }
  } else {
    input2 = input2 - 45;
  }
  return console.log(input1, input2);
}

let input1 = 10;
let input2 = 10;

alram(input1, input2);
