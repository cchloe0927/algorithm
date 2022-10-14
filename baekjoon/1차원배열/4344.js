//첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
//둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
//console.log(input);

caseCount = Number(input[0]);
//console.log(caseCount);

for(let i=1; i<=caseCount; i++) {
    //console.log(input[i]);
    let scores = input[i].split(' ')
    let studentCount = Number(scores[0])
    let sum = 0;
    for(let j=1; j<=studentCount; j++) {
        //console.log(scores[j]);
        sum += Number(scores[j]);
    }
    let average = sum/studentCount;

    let overAverageStudent = 0;
    for(let k=1; k<=studentCount; k++) {
      if(average < scores[k]) {
        overAverageStudent++;
      }
    }
    
    result = (overAverageStudent/studentCount*100).toFixed(3);
    console.log(result + '%');
}