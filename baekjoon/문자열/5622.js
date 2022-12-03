//다이얼

const fs = require('fs');
const { stringify } = require('querystring');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
//console.log(input)
//console.log(input.length) //2

let dial = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
};
//console.log(dial);

let minTime = 0;
for (let i=0; i<input.length; i++){
    //for in -> 딕셔너리형태에서 키값을 가져옴
    for(let text in dial) {
        if(text.includes(input[i])){
            minTime += dial[text];
        }
    }
}
console.log(minTime);