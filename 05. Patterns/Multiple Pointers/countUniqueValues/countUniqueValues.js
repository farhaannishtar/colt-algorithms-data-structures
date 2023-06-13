function countUniqueValues(arr){
    if(arr.length === 0) return 0;

    var i = 0;

    for(var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }

    return i + 1;
}




// ### Description
// Input: sorted Array
// Goal: count unique values

// ### Examples
// [1,1,1,2] -> 2
// [] -> 0
// [-1, 0, 1, 2] -> 4

function countUniqueValuesFarhaan(arr) {
  if (!arr.length) return 0
  let i = 0;
  for (let j = i+1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++
      arr[i] = arr[j];
    }
  }
  return i + 1;
}


console.log("countUniqueValuesFarhaan: ", countUniqueValuesFarhaan([1,1,1,2]))
console.log("countUniqueValuesFarhaan: ", countUniqueValuesFarhaan([1,2,2,3,5,7,7,8,21,42,42,54,54,65,76,99]))
console.log("countUniqueValuesFarhaan: ", countUniqueValuesFarhaan([1,2,2,5,7,7,99]))

console.log("countUniqueValues ", countUniqueValues([1,1,1,2]))
console.log("countUniqueValues: ", countUniqueValues([1,2,2,3,5,7,7,8,21,42,42,54,54,65,76,99]));
console.log("countUniqueValues: ", countUniqueValues([1,2,2,5,7,7,99]));

