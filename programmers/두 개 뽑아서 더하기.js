/* 문제
정수 배열 numbers가 주어집니다.
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  let answer = [];
  let sum = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    //인덱스 순으로 돌면서 .. 마지막 인덱스는 이미 다 더해졌기 때문에 -1을 해줘서 for문을 돌리지 않음
    //console.log(numbers[i]);
    for (let j = i + 1; j < numbers.length; j++) {
      //첫번째 인덱스를 제외한 나머지 인덱스 값 더하기
      sum = numbers[i] + numbers[j]; //console.log(sum);
      if (!answer.includes(sum)) {
        //중복된 값을 포함하지 않을 때 배열에 추가하기
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

let numbers = [5, 0, 2, 7];
console.log(solution(numbers));
