function AmIReallyGonnaMakeIt(sortedArray, element) {
  // Given a sorted array and an element, return the index of the element in O(log(n)) time complexity
  // If there is no such element, return -1
  // Conduct a Binary Search Iteratively

  let left = 0;
  let right = sortedArray.length-1;
  let middle = Math.floor((right+left) / 2);
  while (left <= right && sortedArray[middle] !== element) {
    // console.log("HERE")
    middle = Math.floor((right+left) / 2);
    // console.log("left: ", left);
    // console.log("right: ", right);
    // console.log("middle: ", middle);
    // console.log('~~~~~~~~~~')
    if (sortedArray[middle] < element) left = middle + 1;
    if (sortedArray[middle] > element) right = middle - 1;
  }
  return sortedArray[middle] === element ? middle :  -1;
}

function binarySearchRecursion(arr, element) {
  function binarySearchRecursive(arr, element, start, end) {
    let middle = Math.floor((start+end) / 2);
    while (start <= end && arr[middle] !== element) {
      if (arr[middle] < element) {
        return binarySearchRecursive(arr, element, middle+1, end)
      } else if (arr[middle] > element) {
        return binarySearchRecursive(arr, element, start, middle-1)
      }
    }
    return arr[middle] === element ? middle : -1
  }
  return binarySearchRecursive(arr, element, 0, arr.length-1)
}

console.log(binarySearchRecursion([2,5,6,9,13,15,28,30], 103)); // -1
console.log('###')
console.log(binarySearchRecursion([1 ,2, 3, 4, 5, 6, 7, 8], 7)); // 6
console.log('###')
console.log(binarySearchRecursion([1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12)); // 11












// console.log("binarySearch: [2,5,6,9,13,15,28,30], 103", binarySearch([2,5,6,9,13,15,28,30], 103)); // -1
// console.log('~~~~~~~~~~~~~~~~')
// console.log("binarySearch: [1 ,2, 3, 4, 5, 6, 7, 8], 7)", binarySearch([1 ,2, 3, 4, 5, 6, 7, 8], 7)); // 6
// console.log('~~~~~~~~~~~~~~~~')
// console.log("binarySearch: [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", binarySearch([1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12)); // 11
