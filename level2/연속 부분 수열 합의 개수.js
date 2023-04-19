/*
원형 수열이란 일반적인 수열에서 처음과 끝이 연결된 형태의 수열을 말한다.
예를 들어 [7,9,1,1,4]로 원형 수열을 만들면 다음과 같다.
원형 수열은 처음과 끝이 연결되어 끊기는 부분이 없기 때문에 연속하는 부분 수열도 일반적인 수열보다 많아진다.
원형 수열의 모든 원소 elments가 순서대로 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 리턴하라.

원형수열! 처음과 끝 부분도 더해야한다.

1 1 4 7 9
길이 1 : 1 1 4 7 9 인데 중복된거를 지운다. 그래서 1 4 7 9
길이 2 : 2 5 10 11 16 
길이 3 : 6 11 12 17 20
길이 4 : 13 15 18 21
길이 5 : 22
[1,2,4,5,6,7,9,10,11,12,13,15,16,17,18,20,21,22]
*/

function solution(elements) {
  let start = 0;
  let end = start + 1;
  let arr = [];
  //   elements.sort((a, b) => a - b);
  let copy = [...elements, ...elements];
  let flagvalue = 1;
  while (true) {
    let sum = copy.slice(start, end).reduce((a, b) => a + b);

    if (start === elements.length) {
      start = 0;
      end = flagvalue + 1;
      flagvalue += 1;
    } else {
      start++;
      end++;
      arr.push(sum);
    }

    if (flagvalue === elements.length) break;
  }
  arr.push(elements.reduce((a, b) => a + b));
  return Array.from(new Set(arr)).length;
}

const result = solution([1]);
console.log(result);
