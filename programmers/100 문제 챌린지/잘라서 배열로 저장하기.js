/*
my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_str, n) {
  const result = [];
  // n의 길이의 result를 만들기 위해 전체길이 / n 번 반복
  for (let i = 0; i < my_str.length / n; i++) {
    let part = "";
    // 각 저장요소 별 내용 입력
    for (let j = i * n; j < i * n + n; j++) {
      if (my_str[j]) part += my_str[j];
      else break;
    }
    result.push(part);
  }
  return result;
}

let my_str = "abc1Addfggg4556b";
let n = 6;
console.log(solution(my_str, n));
