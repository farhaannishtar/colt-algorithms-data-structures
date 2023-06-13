function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j+1]) swap(arr, i, j);
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[j+1];
  arr[j+1] = arr[j];
  arr[j] = temp;
}


function bubbleSortFarhaan(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    for (let j = 0; j <= i-1; j++) {
      if (arr[j] > arr[j+1]) {
        swapFarhaan(arr, j, j+1);
      }
    }
  }
  return arr;
}

function swapFarhaan(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log("WE ARE HERE");
}



let arr = [4,5,3,1,2];
bubbleSort(arr);
console.log(arr);

let arr2 = [4,5,3,1,2,8,2,10,76,-1];
bubbleSortFarhaan(arr2);
console.log(arr2);
