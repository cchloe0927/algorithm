//두 수 비교하기
//두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
function soultion(a, b){
  if(a>b) {
    console.log(">")
  } else if (a<b){
    console.log("<")
  } else {
    console.log("==")
  }
}

const A = 1;
const B = 2;
soultion(A, B);