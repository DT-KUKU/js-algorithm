function solution(skill, skill_trees) {
  let answer = 0;
  let skills = skill.split("");
  let filter = [];
  skill_trees.map((val) => {
    filter.push(
      val
        .split("")
        .filter((f) => skills.indexOf(f) !== -1)
        .join("")
    );
  });

  for (let i = 0; i < filter.length; i++) {
    let flag = true;
    filter[i].split("").map((f, idx) => {
      if (f !== skill[idx]) {
        flag = false;
      }
    });
    if (flag) {
      answer++;
    }
  }

  return answer;
}
