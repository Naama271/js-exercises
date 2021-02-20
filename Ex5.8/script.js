
let str = "let's fin the longest word";

function max (str){
    let res = str.split(" ");
    const reducer = (max, currentValue) => max.length > currentValue.length ? max : currentValue;
    return res.reduce(reducer);
}

max (str);