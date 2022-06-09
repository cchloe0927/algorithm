//주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
  let answer = 0;
  for (let i=0; i<nums.length; i++) { //배열 안에서 서로다른 3개의 수를 더하기
    for (let j=i+1; j<nums.length; j++) {
      for (let k=j+1; k<nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) { //소수라면 정답 count++
          answer++;
          }
        }
      }
    }
  function isPrime(sum) {
    if (sum < 2) return true;
      for (let i=2; i<sum; i++) { //1외에 숫자 하나라도 나누어떨어지면 소수탈락
        if (sum % i == 0) return false;
      }
      return true;
    }
    return answer;
}


// 아래는 테스트 코드입니다.
let nums = [1,2,3,4]
console.log(solution(nums))