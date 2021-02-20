
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6


nameInit('Sam Harris');

function nameInit(str) {

    const splitArr = str.split(' ');
    return splitArr[0][0]+"."+splitArr[1][0];
    
}




