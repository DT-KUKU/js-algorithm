/*
게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 파악
DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황
DB캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.

캐시 크기 와 도시이름 배열을 입력받는다.
캐시크기는 정수이며 범위는 0 <= 캐시크기 <= 30 이다.
cities는 도시 이름으로 이뤄진 문자열 배열로 최대 도시 수는 100,000개이다.
각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자

도시 이름 배열을 순서대로 처리할 때, 총 실행시간을 출력한다.
-캐시 교체 알고리즘은 LRU를 사용한다.
- cache hit일 경우 실행시간은 1이다.
- cache miss일 경우 실행시간은 5이다.

*/

function solution(cacheSize, cities) {
  let cacheCount = 0;
  let cache = [];
  cities = cities.map((vl) => vl.toUpperCase());

  for (val of cities) {
    if (cache.indexOf(val) !== -1) {
      cacheCount += 1;
      let copy = cache.filter((v) => v !== val);
      cache = [...copy, val];
    } else {
      cacheCount += 5;
      if (cache.length === cacheSize) {
        if (cacheSize !== 0) {
          let copy = cache.slice(1);
          cache = [...copy, val];
        }
      } else {
        cache.push(val);
      }
    }
  }

  return cacheCount;
}

const result = solution(0, [
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
]);
console.log(result);
