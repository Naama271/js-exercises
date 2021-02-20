
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)

arr = ["naama", "eitam", "roei", "taotao"];

filterFunc(arr);

function filterFunc(arr) {
  let filtered ='';
  for (let i = 0; i < arr.length; i++) {
   
    if (arr[i].includes("e")) {
      filtered +=  arr[i] +" ";
    }
  }
  return filtered;
}


forEachFunc(arr);

function forEachFunc(arr) {
  let new_arr=[];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}


mapFunc(arr);

function mapFunc(arr) {
   let new_arr=[];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] + " carmel");
    
  }
  return new_arr;
}
