

//[1, 1 ,1, 3, 5, 9, 17, 31, ...]


arr = [];

Tribonacci(5);

function Tribonacci(n) {
  arr.push(n);
  arr.push(n);
  arr.push(n + n);

  for (let i = 3; i < 10; i++) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }

  return arr;
}
