/* 문제
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

function solution(nums) {
  let answer = 0;

  //주어진 숫자 중 3개의 수를 더함
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        //소수 판별을 위해 inPrime 함수를 실행함
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }

  //소수 판별 함수
  function isPrime(sum) {
    if (sum < 2) {
      return true; //소수 1일 때는 무조건 true
    }
    for (let i = 2; i < sum; i++) {
      if (sum % i === 0) {
        return false; //2부터 나머지가 0으로 떨어지면 소수가 아님
      }
    }
    return true;
  }
  return answer;
}

let nums = [1, 2, 3, 4];
console.log(solution(nums)); //1
