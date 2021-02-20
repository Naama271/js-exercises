
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"

longest(a, b);

function longest(a, b){
   let splitA = a.split("");
   let splitB = b.split("");

   let ab = splitB.concat(splitA);
   ab.sort();
   
   let result="";
   for (let i = 0; i < ab.length; i++) {
       let x = ab[i];

       if (x !== ab[i-1]){
        result += ab[i];
       }
   }
return result;
}