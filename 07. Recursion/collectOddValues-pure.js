function collectOddValues(arr) {
	let oddsArr = [];

	if (arr.length === 0) return oddsArr;
	if (arr[0] % 2 !== 0) oddsArr.push(arr[0]);

	oddsArr = oddsArr.concat(collectOddValues(arr.slice(1)));
	
	return oddsArr;
}
/* 
	[1]
*/

// collectOddValues([1,2,3,4,5])
/*
[1].concat([2,3,4,5])
										 [].concat([3,4,5])
																				[3].concat([4,5])
																												 [].concat([5])
																																				 [5].concat([])
																												 [5]
																				[3, 5]
[1, 3, 5]
*/



/*
  Return an array which has only the odds of the input array
  1) create oddsArray
  2) 
*/
function collectOddValuesFarhaan(arr) {
  let oddsArray = [];
  if (arr.length === 0) return oddsArray;
  if (arr[0] % 2 !== 0) oddsArray.push(arr[0])
  return oddsArray.concat(collectOddValuesFarhaan(arr.slice(1)));
}

console.log(collectOddValues([1,2,3,4,5]))
console.log(collectOddValuesFarhaan([1,2,3,4,5]))

console.log(collectOddValues([1,2,3,4,5, 7, 9]))
console.log(collectOddValuesFarhaan([1,2,3,4,5, 7, 9]))
