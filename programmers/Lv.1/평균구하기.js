//정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
  let answer = 0;
  for (let i=0; i<arr.length; i++) {
      answer += arr[i];
  }
  return answer/arr.length;
}

let arr = [1,2,3,4]
console.log(solution(arr))