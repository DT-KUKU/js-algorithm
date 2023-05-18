function solution(priorities, location) {
  let answer = 0;
  let copyPri = Array(priorities.length)
    .fill(false)
    .map((_, idx) => {
      return idx === location ? true : _;
    });

  let idx = 0;
  while (priorities.length !== 0) {
    if (priorities[idx] >= Math.max(...priorities)) {
      priorities = priorities.slice(1);
      copyPri = copyPri.slice(1);
      if (copyPri.indexOf(true) === -1) {
        answer++;
        break;
      } else {
        answer++;
      }
    } else {
      priorities = [...priorities.slice(1), ...priorities.slice(0, 1)];
      copyPri = [...copyPri.slice(1), ...copyPri.slice(0, 1)];
    }
  }

  return answer;
}
