//array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요. 
//divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor){
  let answer = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]%divisor==0){
      answer.push(arr[i])
    }
  }
  if(answer.length == 0){
    answer.push(-1)
  }
  return answer.sort((a, b) => a-b);
}

// 아래는 테스트 코드입니다.
let arr = [3,2,6]
let divisor = 5
console.log(solution(arr, divisor))

//일요일 업로드