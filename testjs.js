function largestOfFour(arr) {
    let newArr = [];
    //newArr  = Math.max(arr[0]);
    //newArr[1] = Math.max(arr[1]);
    //newArr[2] = Math.max(arr[2]);
    //newArr[3] = Math.max(arr[3]);
    return Math.max(...arr[0]);
  
  }

  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
    