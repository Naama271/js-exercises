
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

isIsogram("Dermatoglyphics");


function isIsogram(str){

   spiltStr = str.toLowerCase().sort().split('');
  // spiltStr.sort();
 
   for (let i = 0; i < spiltStr.length; i++) {
       
    let x = spiltStr[i];
    //console.log(x);
    if (x === spiltStr[i+1]){
      return false;
    }
}
return true;
}

    /*
   console.log( spiltStr);
       
       const reducer = (letter, currentValue) => letter != currentValue ? "true" : "false";
      console.log( spiltStr.reduce(reducer));
   
   }
  */

