function collectOddValues(arr) {
	// Create ARR to store odd values
	let result = [];
	
	// Inner Function that adds onto result
  function helper(helperInput) {
		// Base Case
		if (helperInput.length === 0) return;
		
		// If currentEL is odd, add it to result
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
		}
		
		// Decrease input & call helper again
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// collect odd values in array
function collectOddValuesFarhaan(arr) {
  let result = [];
  function helper(arr) {
    if (arr.length === 0) return;
    if ((arr[0] % 2) !== 0) {
      result.push(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(arr);
  return result;
}

console.log("I'm going to be a professional developer: ", collectOddValuesFarhaan([1, 2, 3, 4, 5, 6, 7, 8, 9]));
