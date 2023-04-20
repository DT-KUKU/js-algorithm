/*
오픈채팅방 : 친구 아닌 사람들과 대화 가능, 본래 닉네임이 아닌 가상의 닉네임 사용
김크루는 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다.
채팅방에 누군가 들어오면 다음 메시지가 출력된다.

"닉네임님이 들어왔습니다."
"닉네임님이 나갔습니다."
채팅방에서 닉네임을 변경하는 방법은 다음과 같다.
1. 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
2. 채팅방에서 닉네임을 변경한다.
* 닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 메시지의 닉네임도 전부 변경한다.
예를 들어, 채팅방에 Muzi와 Prodo라는 닉네임을 사용하는 사람이 순서대로 들어오면 채팅방에는 다음과 같은 메시지가 출력된다.

채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때
모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 베열 형태로 리턴하라.

Uid1234 !== uid1234

*/

function solution(record) {
  let answer = [];
  let check = {};

  for (val of record) {
    let v = val.split(" ");
    if (v[0] === "Enter") {
      check[v[1]] = check[v[1]] === undefined ? [v[2]] : [...check[v[1]], v[2]];
    }
    if (v[0] === "Leave") {
      check[v[1]] = [...check[v[1]], check[v[1]][check[v[1]].length - 1]];
    }
    if (v[0] === "Change") {
      check[v[1]] = [...check[v[1]], v[2]];
    }
  }

  for (val2 of record) {
    let v = val2.split(" ");
    if (v[0] === "Enter")
      answer.push(`${check[v[1]][check[v[1]].length - 1]}님이 들어왔습니다.`);
    if (v[0] === "Leave")
      answer.push(`${check[v[1]][check[v[1]].length - 1]}님이 나갔습니다.`);
  }

  return answer;
}

const result = solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
  "Leave uid1234",
  //   "Change uid4567 Muzi",
]);
console.log(result);
// i i o i c o c
/*
[
  'Prodo님이 들어왔습니다.',
  'Muzi님이 들어왔습니다.',
  'Prodo님이 나갔습니다.',
  'Prodo님이 들어왔습니다.'
  'Prodo님이 나갔습니다.',
]
*/
