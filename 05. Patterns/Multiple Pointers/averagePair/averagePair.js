function averagePair(arr, avg) {
		if (arr.length === 0) return false;

    const targetSum = avg * 2;
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let currSum = arr[left] + arr[right];
        
        if (currSum === targetSum) return true;
        if (currSum < targetSum) left++;
        if (currSum > targetSum) right--;
    }
    
    return false;
}

function findAveragePair(arr, avg) {
  if (arr.length === 0) return false;

  const targetSum = avg * 2;
  let left = 0;
  let right = arr.length-1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    
    if (sum === targetSum) return true
    if (sum < targetSum) left++;
    if (sum > targetSum) right--;
  } 
  return false;
}

console.log(findAveragePair([1, 2, 3], 2.5));

console.log(averagePair([1, 2, 3], 2.5))
