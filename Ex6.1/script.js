// accum :
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string

accum("abcd");

function accum(str) {
  result = "";
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    let elementUC = str[i].toUpperCase();
    result += "-" + elementUC + element.repeat(i);
  }

  return result.substring(1);
}
