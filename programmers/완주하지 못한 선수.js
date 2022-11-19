/* 문제
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

!제한사항!
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
*/

function solution(participant, completion) {
  let answer = [];
  let participantArry = participant.sort();
  let completionArry = completion.sort();
  //console.log(participantArry);
  //console.log(completionArry);

  for (let i = 0; i < participant.length; i++) {
    if (participantArry[i] !== completionArry[i]) {
      answer.push(participantArry[i]);
      break; //배열을 비교해서 하나라도 같지않은 값이 나올경우 for문을 전부 돌 필요없이 break로 for문을 빠져나옴!
    }
  }
  return answer.join();
}

participant = ['mislav', 'stanko', 'mislav', 'ana'];
completion = ['stanko', 'ana', 'mislav'];
console.log(solution(participant, completion)); //"mislav"

/*풀이설명
sort() 메서드를 사용해서 문자열을 배열해 준다음 두 배열의 인덱스로 값을 비교하여
값이 다른경우에는 완주하지 못한 선수로 간주함!
*/

//join() 함수는 배열의 모든 값들을 연결한 문자열을 리턴한다.
//피라미터로 값이 아무것도 전달되지 않으면, 배열의 각 값들은 ','를 구분자로 하여 연결됨 ex)a,b,c
//피라미터로 '-'가 전달되면, -로 연결된 문자열이 리턴됨 ex)a-b-c
//피라미터로 '' 비어있는 문자열이 전달되면, 배열의 각 값들은 구분자 없이 연결한 문자열이 리턴됨 ex)abc

//sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.
//피라미터를 생략하면, 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 포인트 값에 따라 정렬됨
//피라미터를 생략하면, 만약 숫자 정렬인 경우에 문자열로 변환되기 때문에 예로 9가 80보다 앞에 오는 숫자지만 문자열에서는 "80"이 "9"보다 유니 코드 순서에 따라 앞에 오게된다.
