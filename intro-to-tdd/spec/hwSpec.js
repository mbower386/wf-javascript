// EXERCISE 1
//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n){
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr){
  return arr[0] + arr[arr.length - 1];  
}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
    it("should return 15 when we pass 5 as an argument", function() { 
      expect(Sum1toN(5)).toEqual(15); 
  }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
    it("should return 4 when we pass [2,24,8,2] as an argument", function() { 
      expect(sumFirstLast([2,24,8,2])).toEqual(4); 
  }); 
});

// EXERCISE 2
function returnLargest (arr) {
  var largest = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

describe ("returnLargest", function () {
  it("should return -2 when we pass [-2,-5,-10] as an argument", function () {
    expect(returnLargest([-2,-5,-10])).toEqual(-2);
  });
});
