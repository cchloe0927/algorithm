/* 문제
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요
*/

function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  //divisor로 나누어 떨어지지 않아 push되지 않으면 answer은 빈배열 이기 때문에
  if (answer.length === 0) {
    answer = [-1];
  }
  answer.sort((a, b) => a - b);
  return answer;
}

arr = [2, 36, 1, 3];
divisor = 1;
console.log(solution(arr, divisor)); //[1, 2, 3, 36]
