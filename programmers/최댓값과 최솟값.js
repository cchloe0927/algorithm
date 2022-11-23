function solution(s) {
  var arr = s.split(' ').map((num) => Number(num));
  console.log(arr);

  return Math.min(...arr) + ' ' + Math.max(...arr);
}

let s = '-1 -2 -3 -4';
console.log(solution(s));
