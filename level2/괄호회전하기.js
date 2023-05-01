/*
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
(), [], {}는 모두 올바른 괄호 문자열이다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A}도 올바른 괄호 문자열이다. 예를 들어 [] 가 올바른 괄호 문자열이므로 ([])도 올바른 괄호 문자열이다.
만약 A, B가 올바른 괄호 문자열이라면 AB도 올바른 괄호 문자열이다. 예를 들어, {} 와 ([])가 올바른 괄호 문자열이므로, {}([])도 올바른 괄호 문자열이다.

대괄호, 중괄호, 소괄호로 이루어진 문자열 s가 매개변수로 주어진다. 이 s를 왼쪽으로 x칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 리턴하도록 솔루션 함수를 완성해주세요.


*/

function solution(s) {
  let answer = 0;
  let charArr = s.split("");
  let count = 0;
  while (count < s.length) {
    let copyArr = charArr.slice(count);
    let arr = [copyArr[0]];
    for (let i = 1; i < copyArr.length; i++) {
      if (!arr.length) {
        arr.push(copyArr[i]);
        continue;
      }
      if (arr[arr.length - 1] === "[" && copyArr[i] === "]") arr.pop();
      else if (arr[arr.length - 1] === "{" && copyArr[i] === "}") arr.pop();
      else if (arr[arr.length - 1] === "(" && copyArr[i] === ")") arr.pop();
      else arr.push(copyArr[i]);
    }
    if (!arr.length) {
      answer++;
    }
    charArr.push(charArr[count]);
    count++;
  }

  return answer;
}

const result = solution("[)(]");
console.log(result);
