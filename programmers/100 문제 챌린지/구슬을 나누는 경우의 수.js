/*
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 */

function factorial(n) {
  let bigN = BigInt(n);

  if (bigN === BigInt(1) || bigN === BigInt(0)) {
    return BigInt(1);
  }

  return bigN * factorial(bigN - BigInt(1));
}

function solution(balls, share) {
  const n = balls;
  const m = share;

  return factorial(n) / (factorial(n - m) * factorial(m));
}

let balls = 3;
let share = 2;
console.log(solution(balls, share));
