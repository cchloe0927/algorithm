//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
    var answer = 0;
    for(let i=0; i<=n; i++){
        for(let j=0; j<=n; j++){
            if(i*j===n){
                answer += i
            }
        }
    }
    return answer;
}

// 아래는 테스트 코드입니다.
let n = 5
console.log(solution(n))


//다른 풀이
//function solution(n) {
//    let answer = 0;
//    for(let i=1; i<= n; i++){
//        if(n % i === 0){
//            answer += i 
//        }
//    }
//    return answer;
//}