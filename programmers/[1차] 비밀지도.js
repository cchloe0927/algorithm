function solution(n, arr1, arr2) {
  let sumArr = [];
  let newArr1 = [];
  let newArr2 = [];

  //10진수 2진수로 치환
  for (let i = 0; i < n; i++) {
    newArr1.push(arr1[i].toString(2).padStart(n, '0')); //문자열 길이 맞추줌 padStart 대박!!!
    newArr2.push(arr2[i].toString(2).padStart(n, '0'));
  }
  //console.log(newArr1);
  //console.log(newArr2);

  for (let i = 0; i < n; i++) {
    sumArr.push(
      String(Number(newArr1[i]) + Number(newArr2[i])).padStart(n, '0') //문자열 변환  과정에서 정수로 바꿔버림 -> 맨앞에 있는 0이 없어짐
    ); //요소를 숫자로 바꾸고 각 인덱스의 배열을 더함
    //console.log(sumArr[i]);
    sumArr[i] = sumArr[i].replaceAll('0', ' ');
    sumArr[i] = sumArr[i].replace(/[12]/g, '#');
    //console.log(sumArr[i]);
  }
  return sumArr;
}

//입출력 예제
let n = 6;
let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];
console.log(solution(n, arr1, arr2)); //["#####","# # #", "### #", "# ##", "#####"]

//padStart() : 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다.
