/* 문제
알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다.
당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.

|당첨 번호	31	10	45	1	6	19	결과
|최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
|최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등

    - 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다.
    - 알아볼 수 없는 두 개의 번호를 각각 10, 6이라고 가정하면 3등에 당첨될 수 있습니다.
    - 3등을 만드는 다른 방법들도 존재합니다. 하지만, 2등 이상으로 만드는 것은 불가능합니다.
    - 알아볼 수 없는 두 개의 번호를 각각 11, 7이라고 가정하면 5등에 당첨될 수 있습니다.
    - 5등을 만드는 다른 방법들도 존재합니다. 하지만, 6등(낙첨)으로 만드는 것은 불가능합니다.

민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 
이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
*/

function solution(lottos, win_nums) {
  let answer = [];
  let sameNumberCount = 0;
  let zeroCount = 0;
  let rank = [6, 6, 5, 4, 3, 2, 1];

  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < lottos.length; j++) {
      if (lottos[i] == win_nums[j]) {
        sameNumberCount++; //최저 순위를 구함
        //console.log(sameNumberCount);
      }
    }
    if (lottos[i] == 0) {
      zeroCount++; //최고 순위를 구함
    }
  }
  let maxRank = sameNumberCount + zeroCount;
  let mixRank = sameNumberCount;
  //console.log(maxRank);
  //console.log(mixRank);

  //맞은 개수를 순위로 바꾸는 작업
  for (let i = 0; i < rank.length; i++) {
    if (rank[i] == maxRank) {
      answer.push(i);
    }
    if (rank[i] == mixRank) {
      answer.push(i);
    }
  }
  return answer;
}

let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums)); //[3, 5]
