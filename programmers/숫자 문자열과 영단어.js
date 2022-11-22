/* 문제
다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
| 1478 → "one4seveneight"
| 234567 → "23four5six7"
| 10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.
참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
| 숫자	영단어
| 0	   zero
| 1	   one
| 2	   two
| 3	   three
| 4	   four
| 5	   five
| 6	   six
| 7	   seven
| 8	   eight
| 9    nine
제한사항
1 ≤ s의 길이 ≤ 50
s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
*/

//1. while문을 이용한 문제 풀이
// function solution(s) {
//   let answer = '';
//   let alphabet = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//   ];
//   let s_index = 0;
//   while (s_index < s.length) {
//     if (isNaN(s[s_index])) {
//       for (let i = 0; i < alphabet.length; i++) {
//         let compareAlphabet = '';
//         compareAlphabet = alphabet[i].substring(0, 2);
//         //console.log(compareAlphabet, s.substring(s_index, s_index + 2));
//         if (s.substring(s_index, s_index + 2) === compareAlphabet) {
//           answer += i;
//           s_index += alphabet[i].length;
//           break;
//         }
//       }
//     } else {
//       answer += s[s_index];
//       s_index += 1;
//     }
//   }
//   return parseInt(answer);
// }

// //2. for문을 이용한 문제 풀이
// function solution(s) {
//   let answer = '';
//   let alphabet = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//   ];
//   let alphabetStartWord = [
//     'ze',
//     'on',
//     'tw',
//     'th',
//     'fo',
//     'fi',
//     'si',
//     'se',
//     'ei',
//     'ni',
//   ];

//   for (let i = 0; i < s.length; i++) {
//     if (isNaN(s[i])) {
//       for (let j = 0; j < alphabetStartWord.length; j++) {
//         if (s.substring(i, i + 2) === alphabetStartWord[j]) {
//           answer += j;
//           i = i + alphabet[j].length - 1;
//           break;
//         }
//       }
//     } else {
//       answer += s[i];
//     }
//   }
//   return parseInt(answer);
// }

//3. alphabet의 요소와 주어진 문자열의 문자는 똑같기 때문에 split로 구분을 둠
// function solution(s) {
//   let answer = s;
//   let alphabet = [
//     'zero', //0
//     'one', //1
//     'two', //2
//     'three', //3
//     'four', //4
//     'five', //5
//     'six', //6
//     'seven', //7
//     'eight', //8
//     'nine', //9
//   ];

//   for (let i = 0; i < alphabet.length; i++) {
//     let sArr = answer.split(alphabet[i]);
//     //console.log(sArr);
//     answer = sArr.join(i);
//   }
//   return Number(answer);
// }

//4. replace 사용해서 문제 풀이
// function solution(s) {
//   let answer = '';
//   let alphabet = [
//     'zero', //0
//     'one', //1
//     'two', //2
//     'three', //3
//     'four', //4
//     'five', //5
//     'six', //6
//     'seven', //7
//     'eight', //8
//     'nine', //9
//   ];

//   for (let i = 0; i < alphabet.length; i++) {
//     s = s.replaceAll(alphabet[i], i);
//   }
//   console.log(s);
//   return answer;
// }

let s = 'one4seveneight';
console.log(solution(s)); //1478
