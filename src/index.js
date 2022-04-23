//Write a function which accepts an array of int and a number (n)
//The function should calculate the maximum sum of n consecutive elements in the array.
//ex {1,1,2,3} 2 =>5
function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }
  var max = 0;
  for (var i = 0; i < arr.length - num + 1; i++) {
    var temp = 0;
    for (var j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
//console.log(maxSubarraySum([1, 1, 2, 3], 2));

//2 Sliding Window method
function maxSubarray(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return null;
  //iterate over array once given n
  for (let i = 0; i < n; i++) {
    //get the sum of nums and store in maxSum
    maxSum += arr[i];
    console.log("maxSum", maxSum);
  }
  //make tempSum equal to maxSum
  tempSum = maxSum; //2
  for (let i = n; i < arr.length; i++) {
    //2
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
maxSubarray([1, 1, 2, 3], 2);
