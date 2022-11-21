/* 문제
아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

| 명함 번호	가로 길이	세로 길이
| 1  60	 50
| 2	 30  70
| 3	 60	 30
| 4	 80	 40

가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다.
하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(sizes) {
  let newArr = [];

  for (let i = 0; i < sizes.length; i++) {
    //console.log(sizes[i]);
    if (sizes[i][0] < sizes[i][1]) {
      //배열안에 각 배열에서 비교하여
      newArr.push([sizes[i][1], sizes[i][0]]); //가로길이가 최대값이 오게 설정
    } else {
      newArr.push(sizes[i]); //나머지는 그래로 push
    }
  }
  //console.log(newArr);

  //위에서 배열안의 각 배열들 안의 값을 내림차순으로 만들어 줬고
  //아래에서 배열안의 각 배열들을 내림차순으로 만들기
  let widthMax = newArr.sort((a, b) => b[0] - a[0])[0][0];
  //console.log(widthMax);
  let heightMax = newArr.sort((a, b) => b[1] - a[1])[0][1];
  //console.log(heightMax);

  return widthMax * heightMax;
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(solution(sizes)); //4000
