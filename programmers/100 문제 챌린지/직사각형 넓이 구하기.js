/*
직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 
직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);

  const oneSide = Math.abs(dots[0][1] - dots[1][1]);
  const otherSide = Math.abs(dots[0][0] - dots[2][0]);

  return oneSide * otherSide;
}

let dots = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
];
console.log(solution(dots));
