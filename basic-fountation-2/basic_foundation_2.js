// #1:
function makeItBig(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = 'big';
    }
  }

  return arr;
}

// #2:
function print_low_return_high(arr) {
  var low = arr[0];
  var high = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
    }

    if (arr[i] < low) {
      low = arr[i];
    }
  }

  console.log(low);

  return high;
}

// #3:
function print_one_return_another(arr) {
  var first_odd = arr[0];
  var i = 0;

  console.log(arr[arr.length - 2]);

  while (first_odd % 2 === 0) {
    if (arr[i] % 2 !== 0) {
      first_odd = arr[i];
    }

    i++;
  }

  return first_odd;
}

// #4:
function double_vision(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }

  return arr;
}

// #5:
function count_positives(arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }

  arr[arr.length - 1] = count;

  return arr;
}

// #6:
function evens_and_odds(arr) {
  var even_count = 0;
  var odd_count = 0;

  for (var i = 0; i < arr.length; i++) {
    if ((odd_count <= 3) && (arr[i] % 2 !== 0)) {
      odd_count++;
    }
    if (odd_count == 3) {
      odd_count = 0;
      console.log("That's odd!");
    }

    if ((even_count <= 3) && (arr[i] % 2 === 0)) {
      even_count++;
    }
    if (even_count == 3) {
      even_count = 0;
      console.log("Even more so!");
    }
  }
}

// #7:
function increment_the_seconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i]++;
    }
    console.log(arr[i]);
  }

  return arr;
}

// #8:
function previousLengths(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1].length;
  }

  return arr;
}

// #9:
function addSeven(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 7);
  }

  return newArr;
}

// #10
function reverseArray(arr) {
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

// #11:
function outlook_negative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] -= (arr[i] * 2);
    }
  }

  return arr;
}

// #12:
function always_hungry(arr) {
  var found_food = false;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'food') {
      found_food = true;
      console.log('yummy');
    }
  }

  if (!found_food) {
    console.log("I'm hungry");
  }
}

// #13:
function swapTowardCenter(arr) {
  var i = 0;
  var j = arr.length - 1;

  while (i <= j) {
    var temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }

  console.log(arr);
}

// #14:
function scaleArray(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] *= 3;
    }
  }

  return arr;
}