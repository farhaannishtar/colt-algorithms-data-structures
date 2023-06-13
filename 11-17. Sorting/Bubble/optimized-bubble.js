// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;

  for(var i = arr.length; i > 0; i--){
    noSwaps = true;

    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];

        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

function bubbleSortFarhaan(arr) {
  let yesSwap = false;
  for (let i = arr.length-1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        swapFarhaan(arr, j, j+1);
        yesSwap = true;
      }
    }
    if (!yesSwap) return arr;
  }
  return arr;
}

function swapFarhaan(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp; 
}


console.log(bubbleSortFarhaan([8,1,2,3,4,5,6,7]))
console.log(bubbleSortFarhaan([8,1,23,3,49,5,6,7,87]))


console.log(bubbleSort([8,1,2,3,4,5,6,7]));