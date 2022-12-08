/*
문자열 numbers가 매개변수로 주어질 때,
numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
*/

function solution(numbers) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < num.length; i++) {
    numbers = numbers.split(num[i]).join(i);
  }
  return Number(numbers);
}

let numbers = "onefourzerosixseven";
console.log(solution(numbers));
