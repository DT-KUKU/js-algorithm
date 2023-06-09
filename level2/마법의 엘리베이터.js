/*
마법의 세계에 사는 민수는 아주 높은 탑에 살고 있습니다. 탑이 너무 높아서 걸어 다니기 힘든 민수는 마법의 엘리베이터를 만들었다.

엘리베이터는 -1,+1,-10,+10,-100,+100 등과 같이 절댓값이 10^c 형태인 정수들이 적힌 버튼이 있다.
버튼을 누르면 현재 층 수에 버튼에 적혀 있는 값을 더한 층으로 이동하게 된다.
단 엘리베이터가 위치해 있는 층과 버튼의 값을 더한 결과가 0보다 작으면 엘리베이터는 움직이지 않는다. 민수의 세계에는 0층이 가장 아래층이며 엘리베이터는 현재 민수가 있는 층에 있습니다.

마법의 엘리베이터를 움직이기 위해서 버튼 한 번당 마법의 돌 한 개를 사용하게 됩니다.
예를 들어, 16층에 있는 민수가 0층으로 가려고 한다면 -1이 적힌 버튼을 6번, -10이 적힌 버튼을 1번 눌러 마법의 돌 7개를 소모해서 0층으로 갈 수 있다. 하지만 +1이 적힌 버튼을 4번, -10이 적힌 버튼 2번을 누르면 마법의 돌 6개를 소모해 0층으로 갈 수 있다.

마법의 돌을 아끼기 위해 민수는 항상 최소한의 버튼을 눌러서 이동하려고 한다. 민수가 어떤 층에서 엘리베터를 타고 0층으로 내려가는데 필요한 마법의 돌의 최소 개수를 알고 싶다. 민수와 마법의 엘리베티어가 있는 층을 나타내는 storey가 주어졌을 때, 0층으로 가기 위해 필요한 마법의 돌의 최소값을 리턴하라.

접근 : 최소한의 돌만 사용해야 한다. 
에제 1: 2554 
한 자릿수 값을 파악 : 4는 5보다 작다. 이걸 -1 4번 뺀다.
2550
한 자릿수 값을 파악 : 50을 +10을 5번 한다.
2600
한 자릿수 값을 파악 : 600을 +100 4번 한다.
3000
한 자릿수 값을 파악 : 3000을 -1000 3번 한다.
4 + 5 + 4 + 3 = 16번

2554
한 자릿수 값을 파악 : 4는 5보다 작다. 이걸 -1 4번 뺀다.
2550
한 자릿수 값을 파악 : 50은 -10을 5번 한다.
2500
한 자릿수 값을 파악 : 500은 +100 5번 한다.
3000
한 자릿수 값을 파악 : 2000 -1000 3번 한다.

4 + 5 + 5 + 2 = 16

225
한 자릿수 값을 파악 : 5를 -1 5번 한다.
220
한 자릿수 값을 파악 : 20은 -10 2번 한다.
200
한 자릿수 값을 파악 : 200 -100 2번

9번

225
한 자릿수 값을 파악 : 5를 +1 5번 한다.
230
한 자릿수 값을 파악 : 30을 -10 3번 한다.
200
한 자릿수 값을 파악 : 200은 -100 2번 한다.

10번

295
한 자릿수 값을 파악 : 5를 +1 5번 한다.
300
한 자릿수 값을 파악 : 300은 -100 3번

8번

295
한 자릿수 값을 파악 : 5를 -1 5번 한다.
290
한 자릿수 값을 파악 : 90을 +10 1번 한다.
300
*/

function solution(storey) {
  let answer = 0;
  let arr = String(storey).split("");
  arr = arr.map((v) => Number(v)).reverse();

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < 5) {
      answer += arr[i];
    } else if (arr[i] > 5) {
      answer += 10 - arr[i];
      arr[i + 1] += 1;
    } else {
      if (arr[i + 1] >= 5) {
        answer += arr[i];
        arr[i + 1] += 1;
      } else {
        answer += arr[i];
      }
    }
  }
  if (arr[arr.length - 1] <= 5) {
    answer += arr[arr.length - 1];
  } else {
    answer += 10 - arr[arr.length - 1] + 1;
  }

  return answer;
}
const result = solution(2554);
console.log(result);
