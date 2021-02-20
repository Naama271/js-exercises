//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

let arr = [];

Fibonacci(5);

function Fibonacci(n) {
  arr.push(n);
  arr.push(n);
  arr.push(n + n);

  for (let i = 3; i < 10; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}
