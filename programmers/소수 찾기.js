/* 문제
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.(1은 소수가 아닙니다.)

제한사항
n은 2이상 1000000이하의 자연수입니다.
*/

//에라토스테네스의 체 수학공식 풀이 방법
function solution(n) {
  let nArr = new Array(n + 1); //파라미터로 객체의 길이를 넘겨줌 -> 길이만큼의 빈 요소가 들어감
  let count = 0; //소수의 개수 초기값 설정

  //객체 생성 후 요소를 전부 true로 넣어놈
  for (let i = 0; i < nArr.length; i++) {
    nArr[i] = true;
  }

  nArr[0] = false; //0과 1일 false 바꿔줌 //1은 소수가 아님
  nArr[1] = false;

  for (let i = 2; i <= n; i++) {
    if (nArr[i]) {
      for (let j = 2; i * j <= n; j++) {
        //for문 조건에서 생성해준 배열 보다 넘지 않도록 조건 설정!
        nArr[i * j] = false;
      }
    }
    //console.log(nArr[i]);
  }
  //소수이면 true이기 때문에 true일 때 count를 1씩 증가 시키기
  for (let i = 0; i <= n; i++) {
    if (nArr[i]) {
      count++;
    }
  }
  return count;
}

//시간 초과
// function solution(n) {
//   count = 0;
//   for (let i = 2; i <= n; i++) {
//     //1은 소수가 아니다
//     if (isPrime(i)) {
//       //console.log(i);
//       count++;
//     }
//   }
//   return count;
// }

//소수 판별 함수
// function isPrime(sum) {
//   if (sum < 2) {
//     return true; //1일 때는 무조건 true
//   }
//   console.log(sum);
//   for (let i = 2; i < sum; i++) {
//     if (sum % i === 0) {
//       return false; //2부터 나머지가 0으로 떨어지면 소수가 아님
//     }
//   }
//   return true;
// }

let n = 10;
console.log(solution(n)); //2
