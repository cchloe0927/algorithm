/* 문제
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

!제한 조건!
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
*/

function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]); //원본 배열을 건들지 않기 위해 새로운 배열을 만들어줌!
    //console.log(newArr);
  }
  newArr.sort((a, b) => a - b); //정렬을 통해 최소값이 맨 앞에 오도록 하고!
  let minimum = newArr[0]; //인덱스를 통해 최솟값을 할당하여
  //console.log(minimum); //최솟값
  //console.log(arr); //원본배열
  arr.splice(arr.indexOf(minimum), 1);
  console.log(arr);
  return arr;
}

n = [4, 3, 1, 2];
console.log(solution(n)); //[4,3,2]

//splice vs slice
