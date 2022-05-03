function soultion(A, B, C){
  console.log((A+B)%C);
  console.log(((A%C)+(B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C)*(B%C))%C);
}

let A = 5;
let B = 8;
let C = 4;
soultion(A, B, C)

//(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
//(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
//세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.