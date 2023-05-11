/*
XYZ 마트는 일정한 금액을 지불하면 10일 동안 회원 자격을 부여한다. XYZ 마트에서는 * 회원을 대상으로 매일 한 가지 제품을 할인 *
알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입을 하려 한다.
예를들어 정현이가 원하는 제품이 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개이며 XYZ 마트에서 15일간 회원을 대상으로 할인하는 제품이 날짜 순서대로 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나인 경우에 대해 알아봅시다. 첫째 날부터 열흘 간에는 냄비가 할인하지 않기 때문에 첫째 날에는 회원가입을 하지 않는다. 둘째 날부터 열흘 간에는 바나나를 원하는 만큼 할인구매할 수 없기 때문에 둘째 날에도 회원가입을 하지 않습니다. 셋째 날, 넷째 날, 다섯째날부터 각각 열흘은 원하는 제품과 수량이 일치하기 때문에 셋 중 하루에 회원가입을 하려 합니다.

정현이가 원하는 제품을 나타내는 문자열 배열 want와 정현이가 원하는 제품의 수량을 나타내는 정수 배열 number, XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 discount가 주어졌을 때, 회원 등록시 정현이가 원하는 제품을 모두 할인 받을 수 잇는 회원등록 날짜의 총 일수를 리턴하는 함수를 만들어라. 가능한 날이 없으면 0을 리턴해라.
*/

function solution(want, number, discount) {
  let answer = 0;
  let user = {};

  for (let i = 0; i < want.length; i++) {
    user[want[i]] = number[i];
  }
  let copyObj = { ...user };
  let start = 0;
  let last = 10;
  while (last <= discount.length) {
    discount.slice(start, last).map((v) => {
      if (copyObj[v]) copyObj[v] -= 1;
    });
    Object.values(copyObj).reduce((a, b) => a + b) === 0 && answer++;
    copyObj = { ...user };
    start++;
    last++;
  }
  return answer;
}

const result = solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);
console.log(result);
