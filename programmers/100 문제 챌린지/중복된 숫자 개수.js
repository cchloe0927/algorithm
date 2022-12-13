/*
array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(array, n) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
}

let array = [1, 1, 2, 3, 4, 5];
let n = 1;
console.log(solution(array, n));
