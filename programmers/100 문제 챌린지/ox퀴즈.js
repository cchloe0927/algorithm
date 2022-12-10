/**
덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

function solution(quiz) {
  // 정답을 담은 배열
  const correct = quiz.map((a) => eval(a.split(" = ")[0]));
  // 제출답안 배열
  const result = quiz.map((a) => +a.split(" = ")[1]);
  // 정답 여부
  return result.map((a, i, arr) => (a === correct[i] ? "O" : "X"));
}

let quiz = ["3 - 4 = -3", "5 + 6 = 11"];
console.log(solution(quiz));
