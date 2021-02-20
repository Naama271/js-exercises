// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

arr = [1, 1, 1, 2, 1, 1];

//  function findUniq(arr){
//     const reducer = (uniq, currentValue) => uniq != currentValue ? currentValue : uniq;

//     console.log( arr.reduce(reducer));
//   }

findUniq(arr);

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 3) {
      let element = arr[i];
      if (element !== arr[i + 1]) {
        return arr[i + 1];
      }
    } else {
      return "array contains at least 3 numbers";
    }
  }
}
