
toCamelCase("the-stealth-warrior");

function toCamelCase(str){
 //  let nstr= str.replace("-", "");

 let result="";
for (let i = 0; i < str.length; i++) {
    
    if(str[i]==="-"){

    nstr= str[i+1].toUpperCase();
    result +=nstr;
 
}else{
  result +=str[i];
 
}
}
return result;

}