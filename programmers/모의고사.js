/* 문제
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

function solution(answers) {
  let answer = [];
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let supo1answer = answer.filter(
    (answer, i) => answer === supo1[i % supo1.length]
  ).length;
  let supo2answer = answer.filter(
    (answer, i) => answer === supo2[i % supo1.length]
  ).length;
  let supo3answer = answer.filter(
    (answer, i) => answer === supo3[i % supo1.length]
  ).length;

  let rank1 = Math.max(supo1answer, supo2answer, supo3answer);

  if (supo1answer === rank1) {
    answer.push(1);
  }
  if (supo1answer === rank1) {
    answer.push(2);
  }
  if (supo1answer === rank1) {
    answer.push(3);
  }

  return answer;
}

let answers = [1, 2, 3, 4, 5];
console.log(solution(answers)); //[1]
