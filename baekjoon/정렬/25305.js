//2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 $N$명의 학생들이 응시했다.
//이들 중 점수가 가장 높은 $k$명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라.
//커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');
//console.log(input);

let N = input[0].split(' ')[0];
let k = input[0].split(' ')[1];
//console.log(N, k);

let x = input[1].split(' ');
let rank = x.map((num) => Number(num));
rank.sort((a, b) => b - a);
//console.log(rank);

console.log(rank[k - 1]);
