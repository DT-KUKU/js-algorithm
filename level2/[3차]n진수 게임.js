function solution(n, t, m, p) {
  let answer = "";
  let str = "";
  for (let i = 0; i < t * m; i++) {
    str += i.toString(n).split("").join("").toUpperCase();
  }
  let count = 0;
  let key = p - 1;
  while (count < t) {
    answer += str[key];
    key += m;
    count++;
  }

  return answer;
}
