// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}


function binarySearchFarhaan(arr, element) {
  let start = 0;
  let end = arr.length-1
  let middle = Math.floor((start+end) / 2)
  while (start <= end && arr[middle] !== element) {
    if (arr[middle] < element) start = middle+1
    if (arr[middle] > element) end = middle-1 
    middle = Math.floor((start+end) / 2)
  }
  if (arr[middle] === element) {
    return middle
  } else {
    return -1
  }
}

console.log("binarySearch: [2,5,6,9,13,15,28,30], 103", binarySearch([2,5,6,9,13,15,28,30], 103));
console.log("binarySearchFarhaan: [2,5,6,9,13,15,28,30], 103", binarySearchFarhaan([2,5,6,9,13,15,28,30], 103));
console.log('~~~~~~~~~~~~~~~~')
console.log("binarySearch: [1 ,2, 3, 4, 5, 6, 7, 8], 7)", binarySearch([1 ,2, 3, 4, 5, 6, 7, 8], 7));
console.log("binarySearchFarhaan: [1 ,2, 3, 4, 5, 6, 7, 8], 7)", binarySearchFarhaan([1 ,2, 3, 4, 5, 6, 7, 8], 7));
console.log('~~~~~~~~~~~~~~~~')
console.log("binarySearch: [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", binarySearch([1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12));
console.log("binarySearchFarhaan: [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", binarySearchFarhaan([1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12));
