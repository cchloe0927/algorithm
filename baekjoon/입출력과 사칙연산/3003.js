/*백준 제출 코드
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map((item) => Number(item));

let origin = [1, 1, 2, 2, 2, 8];
let result = origin.map((item, index) => item - input[index]);
console.log(result.join(' '));
*/

/*
동혁이는 오래된 창고를 뒤지다가 낡은 체스판과 피스를 발견했다.
체스판의 먼지를 털어내고 걸레로 닦으니 그럭저럭 쓸만한 체스판이 되었다. 하지만, 검정색 피스는 모두 있었으나, 흰색 피스는 개수가 올바르지 않았다.
체스는 총 16개의 피스를 사용하며, 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성되어 있다.
동혁이가 발견한 흰색 피스의 개수가 주어졌을 때, 몇 개를 더하거나 빼야 올바른 세트가 되는지 구하는 프로그램을 작성하시오.
*/

let origin = [1, 1, 2, 2, 2, 8];
let input = [0, 1, 2, 2, 2, 7];

let result = origin.map((item, index) => item - input[index]);

console.log(result.join(' ')); //배열요소들을 빈칸을 기준으로 하나의 문자열을 만듦

//join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
