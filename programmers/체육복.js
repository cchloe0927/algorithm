/* 문제
학생들의 번호는 체격 순으로 매겨져 있어,
바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, lost, reserve) {
  let count = 0;

  //학생 수 만큼 배열의 가지고 있는 유니폼 수를 1로 초기화
  let hasUniform = new Array(n).fill(1);
  //console.log('hasUniform: ', hasUniform);

  //잃어버린 학생은 -1
  for (let i = 0; i < lost.length; i++) {
    hasUniform[lost[i] - 1]--;
  }

  //여벌이 있으면 +1
  for (let i = 0; i < reserve.length; i++) {
    hasUniform[reserve[i] - 1]++;
  }

  //유니폼이 없을 때 좌우 학생에게만 유니폼을 빌려줄 수 있는 경우
  for (let i = 0; i < n; i++) {
    //console.log(hasUniform);
    if (hasUniform[i] === 0) {
      //유니폼이 없는 경우
      if (hasUniform[i - 1] === 2) {
        //전 번호 학생이 유니폼을 가지고 있다면
        hasUniform[i]++; // 유니폼이 없는 학생이 1이되고,
        hasUniform[i - 1]--; //유니폼 빌려준 학생이 -1이 되고,
      } else if (hasUniform[i + 1] === 2) {
        //뒤 번호 학생이 유니폼을 가지고 있다면
        hasUniform[i]++; //유니폼이 없는 학생이 1이되고,
        hasUniform[i + 1]--; //유니폼 빌려준 학생이 -1이 되고,
      }
    }
    //유니폼이 있는 사람 count + 1
    if (hasUniform[i] >= 1) {
      count++;
    }
  }
  return count;
}

let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
console.log(solution(n, lost, reserve)); //5

//초기화  [1, 1, 1, 1, 1]
//학생 수 [1, 2, 3, 4, 5]
//Index  0, 1, 2, 3, 4
