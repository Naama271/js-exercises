
// //console.log("works");

//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

let str = "let's find the shortest word";

min (str);

function min (str){
    let res = str.split(" ");

    const reducer = (min, currentValue) => min.length < currentValue.length ? min : currentValue;
    return res.reduce(reducer);

}