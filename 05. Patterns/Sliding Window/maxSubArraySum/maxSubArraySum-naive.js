function maxSubArraySum(arr, num) {
  // Number must be less than ARR.length
  if (arr.length < num) return null;

  // Set max to lowest possible value
  var max = -Infinity;

  // Loop through the ARR
  for (let i = 0; i < arr.length; i++) {
    // Use 'temp' to store the current sum
    temp = 0;

    // Start summing numbers
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    // Get the new max
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}


function maxSubArraySumFarhaan(arr, number) {
  if (arr.length < number) return null;
  let max = -Infinity
  for (let i = 0; i <= arr.length-number; i++) {
    let temp = 0;
    for (let j = 0; j < number; j++) {
      temp += arr[i + j]
    }
    max = Math.max(max, temp);
  }
  return max;
}
let array1 = [1,2,3,4];
let array2 = [-1, 3, 5, 1]

console.log(maxSubArraySum(array1, 2));
console.log(maxSubArraySumFarhaan(array1, 2));

console.log(maxSubArraySumFarhaan(array2, 3));
console.log(maxSubArraySum(array2, 3));














console.log("~~~~~~~~~~")

for (let i = 0; i < 3; i++) {
  if (i === 1) {
    console.log('HERE')
    continue;
  }
  console.log('THERE')
}