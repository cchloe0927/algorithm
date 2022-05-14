//정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

function solution(arr) {
  if (arr.length === 1) { 
      return [-1]
  }
  let temp = [];
  for(let i =0; i<arr.length; i++){
      temp.push(arr[i])
  } 
  temp.sort((a,b) => a-b) //오름차순정렬, 화살표함수
  //console.log(temp)
  let find = temp[0]      
  
  arr.splice(arr.indexOf(find),1)  

  return arr
}

// 아래는 테스트 코드입니다.
let arr = [3,4,2,1]
console.log(solution(arr))

//indexof -> 배열 내부에 찾으려는 값이 존재하는 경우에는 배열의 해당하는 값의 인덱스를 반환하고, 그렇지 않은 경우에는 -1 값을 반환