// #1:
function sigma(num) {
  var sum = 1;

  for (var i = 2; i <= num; i++) {
    sum += i;
  }

  return sum;
}

// #2:
function factorial(num) {
  var sum = 1;

  for (var i = 2; i <= num; i++) {
    sum *= i;
  }

  return sum;
}

// #3:
function fibonacci(num) {
  var fib_arr = [];

  if (num === 1) {
    fib_arr.push(0);
  }
  else if (num === 2) {
    fib_arr.push(0);
    fib_arr.push(1);
  }
  else if (num > 2) {
    fib_arr.push(0);
    fib_arr.push(1);

    for (var i = 2; i <= num; i++) {
      fib_arr.push(fib_arr[i - 1] + fib_arr[i - 2]);
    }
  }

  return fib_arr[num];
}

// #4:
function second_to_last(arr) {
  if (arr.length >= 2) {
    return arr[arr.length - 2];
  }
  else {
    return null;
  }
}

// #5:
function n_to_last(arr, n) {
  if (arr.length >= n) {
    return arr[arr.length - n];
  }
  else {
    return null;
  }
}

// #6:
function second_largest(arr) {
  var largest = arr[0];

  if (arr.length < 2) {
    largest = null;
  }
  else {
    var index_of_largest = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[index_of_largest]) {
        index_of_largest = i;
      }
    }

    arr.splice(index_of_largest, 1);

    largest = arr[0];

    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[index_of_largest]) {
        index_of_largest = j;
      }
    }

    largest = arr[index_of_largest];
  }

  return largest;
}

// #7:
function double_trouble(arr) {
  var new_arr = [];

  for (var i = 0; i < arr.length; i++) {
    new_arr.push(arr[i]);
    new_arr.push(arr[i]);
  }

  return new_arr;
}
