/*
const fs=require('fs');
const input=fs.readFileSync('/dev/stdin').toString();
const score=parseInt(input);

if (score>=90){
    console.log('A');
}
else if (score>=80){
    console.log('B');
}
else if (score>=70){
    console.log('C');
}
else if (score>=60){
    console.log('D');
}
else{
    console.log('F');
}
*/

//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

function grade(input) {
  if (90 < input && input <= 100) {
    return 'A';
  } else if (80 < input && input < 89) {
    return 'B';
  } else if (70 < input && input < 79) {
    return 'C';
  } else if (60 < input && input < 69) {
    return 'D';
  } else {
    return 'F';
  }
}

const input = 100;
console.log(grade(input));
