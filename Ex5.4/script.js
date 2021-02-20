
//toWeirdCase( "String" );//=> returns "StRiNg"
//toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

toWeirdCase("Weird string case");

function toWeirdCase(str) {

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0 || str[i - 1] === " ") {
      let uppC = str[i].toUpperCase();
       result += uppC;

    } else if (str[i - 1] === " ") {
      let uppC = str[i].toUpperCase();
      result += uppC;

    } else {
      result += str[i];
    }
  }
    return result;
}
