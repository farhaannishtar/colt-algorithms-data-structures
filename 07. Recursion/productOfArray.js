// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArrayFarhaan(arr) {
  if (arr.length === 1) return arr[0]
  return arr[0] * productOfArrayFarhaan(arr.slice(1));
}

console.log(productOfArray([1, 2, 3]))
console.log(productOfArrayFarhaan([1, 2, 3]))

console.log(productOfArray([1, 2, 3, 10]))
console.log(productOfArrayFarhaan([1, 2, 3, 10]))

console.log(productOfArray([1, 2, 3, 10, 100]))
console.log(productOfArrayFarhaan([1, 2, 3, 10, 100]))

