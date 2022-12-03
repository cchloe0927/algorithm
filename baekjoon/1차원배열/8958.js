//"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
//OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
//console.log(input);

const n = Number(input[0]);

for(let i=1; i<=n; i++){
    let count = 1;
    let sum = 0;
    
    for(let j=0; j<input[i].length; j++){
        if(input[i][j]==="O"){
            sum+=count;
            count++;
        }else{
            count = 1;
        }
    }
    console.log(sum);
}