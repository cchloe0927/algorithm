/* 문제
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

| 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
| 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
| 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/

function solution(answers) {
  let answer = [];
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let supoo1answer = answer.filter(
    //supo1의 인덱스를 접근하기 위해 filter 매개변수로 i를 전달해 주고
    //i가 0, 1, 2, 3, 4 ... 될 수 있도록 % supo1.length를 해줌
    (answer, i) => answer === supo1[i % supo1.length]
  ).length;
  //answer -> 1 === supo1[0] -> 1
  let supoo2answer = answer.filter(
    (answer, i) => answer === supo2[i % supo2.length]
  ).length;
  //answer -> 1 === supo2[0] -> 2
  let supoo3answer = answer.filter(
    (answer, i) => answer === supo3[i % supo3.length]
  ).length;
  //answer -> 1 === supo3[0] -> 3

  //가장 맞은 문제를 맞춘 사람 구해서 supo1 인지 supo2 인지 supo3인지 배열에 넣기!
  let rank_top = Math.max(supoo1answer, supoo2answer, supoo3answer);
  if (supoo1answer === rank_top) {
    answer.push(1);
  }
  if (supoo1answer === rank_top) {
    answer.push(2);
  }
  if (supoo1answer === rank_top) {
    answer.push(3);
  }

  return answer;
}

let answers = [1, 2, 3, 4, 5];
console.log(solution(answers)); //[1]

//filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
//Math.max() : 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환함
