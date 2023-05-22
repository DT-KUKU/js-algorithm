function solution(s) {
  return s
    .split(" ")
    .map((value) => {
      if (value !== "") {
        if (value[0].charCodeAt(0) >= 48 && value[0].charCodeAt(0) <= 57) {
          return `${value[0]}${value.substring(1).toLowerCase()}`;
        } else {
          return `${value[0].toUpperCase()}${value.substring(1).toLowerCase()}`;
        }
      }
      return value;
    })
    .join(" ");
}
