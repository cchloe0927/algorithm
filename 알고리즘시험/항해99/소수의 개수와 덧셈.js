/* 문제
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

- s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
- 문자열에는 소수가 한개 이상 섞여 있습니다.
- 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
- 음수는 없습니다.
*/

function solution(s) {
  let answer = 0;
  let min = []; //배열 x -1
  let max = []; // - 1
  let arr = s.split(' ').map((item) => Number(item));
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // for (int i = 2; i < arr[i]; i++) {if 만약 나눠지면 소수 아님, 나눠지지 않으면 소수}
      min.push(arr[i]);
      console.log('min: ', min);
    } else {
      max.push(arr[i]);
      console.log('max: ', max);
    }
  }
  let isPrimeMax = max.sort((a, b) => b - a);
  let isNotPrimeMin = min.sort((a, b) => b - a);
  console.log(isNotPrimeMin[0], isPrimeMax[0]);
}

let s = '2 3 4 5';
console.log(solution(s)); //"4 5"

//문제 풀이
