//2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt') // "/dev/stdin"
  .toString()
  .trim()
  .split('\n');
//console.log(input);

let N = input.shift();
//console.log(N);

let result = '';
let coordinate = input.map((coords) =>
  coords.split(' ').map((num) => Number(num))
);
//console.log(coordinate);

coordinate.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//console.log(coordinate);

coordinate.forEach((item) => {
  result += `${item[0]} ${item[1]}\n`;
});
console.log(result);
