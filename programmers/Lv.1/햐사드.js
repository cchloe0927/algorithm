//양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(arr) {
  let answer = true;
  let text = String(arr);
  //console.log(text.length)
  let sum = 0;

  for(let i=0; i<text.length; i++) {
    sum += Number(text[i]);
  }
  if (arr%sum==0){
    return answer;
  } else {
    return false;
  }
}


// 아래는 테스트 코드입니다.
let arr = 12
console.log(solution(arr))

//어떤식으로 풀지 생각하고 그에 맞는 상수 지정도 중요