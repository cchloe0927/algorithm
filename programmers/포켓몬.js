/* 문제
홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다
당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.
N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중,
가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(nums) {
  let answer = 0;
  let setArr = new Set(nums); //중복값이 있는 배열을 Set 객체로 만들어서 중족을 제거
  let uniqueArr = [...setArr]; //Set 객체를 다시 배열로 반환
  console.log('uniqueArr: ', uniqueArr);
  let choose = [];
  for (let i = 0; i < uniqueArr.length - 1; i++) {
    for (let j = i + 1; j < uniqueArr.length; i++) {
      choose.push(uniqueArr[i]);
    }
    uniqueArr[i];
    console.log(uniqueArr[i]);
  }
  return answer;
}

let nums = [3, 1, 2, 3];
console.log(solution(nums)); //2
