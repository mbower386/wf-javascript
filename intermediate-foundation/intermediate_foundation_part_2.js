// #1:
function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  else {
    return fib(num - 2) + fib(num - 1);
  }
}