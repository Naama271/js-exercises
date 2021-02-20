
// maskify("Skippy");
// maskify( "1");
// maskify( "");
// maskify("Nananananananananananananananana Batman!")

function maskify(str){
 //let newStr = "";

 if(str.length <5 ){
    return str;
    }
    let result= ""
    for (let i = 0; i < str.length ; i++) {
        if( i < str.length-4){
            result += "#";
        }
        else if ( i> str.length-5){
       
        result += str[i];
        }
    }

    return result;

}
