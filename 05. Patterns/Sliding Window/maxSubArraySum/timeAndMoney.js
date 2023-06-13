// Given an array of integers and a number, write a function
// called maxSubarraySum, which finds the maximum 
// sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the 
// original array. In the first
// example below, [100, 200, 300] is a subarray of the original
// array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  let tempMax = max;
  for (let i = num; i < arr.length; i++) {
    tempMax = tempMax - arr[i-num] + arr[i];
    max = Math.max(max, tempMax);
  }
  return max;
}




console.log('700: ', maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null















// function maxSubArraySum(arr, num) {
//   // num can't be greater than arr.length
//   if (arr.length < num) return null;

//   // Keep track of greatest sum and current sum
//   let maxSum = 0;
//   let tempSum = 0;

//   // Start: get sum of first <num> digits
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }

//   // maxSum will be compared w/ tempSum
//   tempSum = maxSum;

//   // Now for the fun part...
//   for (let i = num; i < arr.length; i++) {
//     // Remove the first entry in the "window"
//     // Add the next entry to the window
//     // If the new sum is greater than current, then change maxSum
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }

//   return maxSum;
// }