/* BASIC FOUNDATION 1 */

// #1:
function two_five_five() {
  var arr = [];
  for (var i = 1; i <= 255; i++) {
    arr.push(i);
  }

  return arr;
}

// #2:
function even_thousand() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

//  #3:
function odd_five_thousand() {
  var sum = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

// #4:
function array_sum(arr) {
  var sum = 0;

  for (var i = 1; i <= arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// #5:
function array_max(arr) {
  var max = arr[0];

  for (var i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// #6:
function array_avg(arr) {
  var sum = 0;

  for (var i = 1; i <= arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// #7:
function array_odd() {
  var odd_arr = [];

  for (var i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      odd_arr.push(i);
    }
  }

  return odd_arr;
}

// #8:
function greater_than_y(arr, y) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++;
    }
  }

  return count;
}

// #9:
function squares(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }

  return arr;
}

// #10:
function negatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }

  return arr;
}

// #11:
function min_max_avg() {
  var min_max_avg = [];
  var sum = 0;
  var min = arr[0];
  var max = arr[0];
  var avg = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = sum / arr.length;

  min_max_avg.push(max);
  min_max_avg.push(min);
  min_max_avg.push(avg);

  return min_max_avg;
}

// #12:
function swap_values(arr) {
  var i = 0;
  var j = arr.length - 1;

  while (i <= j) {
    var temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }

  return arr;
}

// #13;
function number_to_string(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }

  return arr;
}