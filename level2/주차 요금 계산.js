function solution(fees, records) {
  let answer = [];
  let parking = {};
  records.map((info) => {
    info = info.split(" ");
    if (info[2] === "IN") {
      if (parking[info[1]]) {
        parking[info[1]].push(info[0]);
      } else {
        parking[info[1]] = [info[0]];
      }
    } else if (info[2] === "OUT") {
      parking[info[1]].push(info[0]);
    }
  });

  Object.keys(parking)
    .sort((a, b) => a - b)
    .map((info) => {
      if (parking[info].length % 2 !== 0) {
        parking[info].push("23:59");
      }
      let count = 0;
      for (let i = 0; i < parking[info].length; i += 2) {
        let parIn =
          Number(parking[info][i].split(":")[0]) * 60 +
          Number(parking[info][i].split(":")[1]);
        let parOut =
          Number(parking[info][i + 1].split(":")[0]) * 60 +
          Number(parking[info][i + 1].split(":")[1]);

        count += parOut - parIn;
      }

      if (fees[0] - count >= 0) {
        answer.push(fees[1]);
      } else {
        let upCount =
          (count - fees[0]) % fees[2] === 0
            ? ((count - fees[0]) / fees[2]) * fees[3]
            : Math.ceil((count - fees[0]) / fees[2]) * fees[3];
        answer.push(fees[1] + upCount);
      }
    });

  return answer;
}
