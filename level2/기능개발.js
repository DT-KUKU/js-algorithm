/*
배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
각 배포마다 몇 개의 기능이 배포되는지를 리턴하라.
*/

function solution(progresses, speeds) {
  let answer = [];
  let idx = 0;
  let cidx = 0;
  while (idx < progresses.length) {
    let val = 100 - progresses[idx];
    let count = Math.ceil(val / speeds[idx]);
    progresses = progresses.map((v, idx) => {
      return v + speeds[idx] * count;
    });
    for (vs of progresses.slice(idx)) {
      if (vs >= 100)
        answer[cidx] = answer[cidx] === undefined ? 1 : answer[cidx] + 1;
      else break;
    }
    idx += answer[answer.length - 1];
    cidx++;
  }

  return answer;
}

const result = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
console.log(result);
