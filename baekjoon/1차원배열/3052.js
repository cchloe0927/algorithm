//두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
//수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

//console.log(input);

let divideNum = input.map(num => Number(num)); //map로 하나씩 돌면서 숫자로 변환하고,
for(let i=0; i<input.length; i++){  //for문을 돌면서 42로 나눈 나머지 값 산출.
    //console.log(input[i]);
    divideNum[i]= input[i] % 42;
    
}
//console.log(divideNum);
let set = new Set(divideNum); //set객체는 중복되지 않는 유일한 값들의 집합 ---> 중복제거
//console.log(set);
divideNum = [...new Set(divideNum)]
//console.log(divideNum);
console.log(divideNum.length);

