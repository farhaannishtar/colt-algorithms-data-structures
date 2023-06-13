function maxSubArraySum(arr, num) {
  // num can't be greater than arr.length
  if (arr.length < num) return null;

  // Keep track of greatest sum and current sum
  let maxSum = 0;
  let tempSum = 0;

  // Start: get sum of first <num> digits
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // maxSum will be compared w/ tempSum
  tempSum = maxSum;

  // Now for the fun part...
  for (let i = num; i < arr.length; i++) {
    // Remove the first entry in the "window"
    // Add the next entry to the window
    // If the new sum is greater than current, then change maxSum
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([1,2,3,4], 2))

// [1,2,3,4], 2 -> 7
// [-1, 3, 5, 1], 3 -> 9