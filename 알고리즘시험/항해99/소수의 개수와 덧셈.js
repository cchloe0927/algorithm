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
  let answer = '';
  let prime = []; //배열 x -1
  let nonePrime = []; // - 1
  let arr = s.split(' ').map((item) => Number(item));
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      prime.push(arr[i]);
    } else {
      nonePrime.push(arr[i]);
    }
  }
  let primeMax = prime.sort((a, b) => b - a)[0];
  let nonePrimeMin = nonePrime.sort((a, b) => a - b)[0];
  answer = `'${nonePrimeMin} ${primeMax}'`;
  return answer;
}

//소수 판별 함수
function isPrime(num) {
  if (num < 2) {
    return true; //소수 1일 때는 무조건 true
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; //2부터 나머지가 0으로 떨어지면 소수가 아님
    }
  }
  return true;
}

let s = '97 75 88 99 95 92 73';
console.log(solution(s)); //"75 97"
