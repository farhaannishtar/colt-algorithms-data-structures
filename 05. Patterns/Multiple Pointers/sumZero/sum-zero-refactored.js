function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];

		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}



const sumZeroFarhaan = (arr) => {
  console.log("Imagine starting now you gave it everything you got to become a professional developer?");
  console.log("How much would your future self thank you?");
  let right = arr.length - 1;
  let left = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]]
    if (sum < 0) {
      left++
    } else {
      right--
    }
  }
  return undefined;
}

console.log("sumZeroFarhaan: ", sumZeroFarhaan([-111, -101, -69, -9, -5, -2, -1, 1, 2, 3, 4, 5, 9, 6, 10, 102, 104, 107, 112]))
console.log("sumZero: ", sumZero([-111, -101, -69, -9, -5, -2, -1, 1, 2, 3, 4, 5, 9, 6, 10, 102]))





















// function sumZeroForLoop(sortedArr)  {
//   let left = 0;
//   let right = sortedArr.length-1;
//   for (let i = 0; i < sortedArr.length; i++) {
//     let sum = sortedArr[left] + sortedArr[right]
//     if (sum === 0) {
//       return [sortedArr[left], sortedArr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++
//     }
//   }
// }

// function sumZeroWhileLoop(sortedArr) {
//   let left = 0;
//   let right = sortedArr.length-1;
//   // it has to "left < right" and not "left <= right" because if the
//   // left and right are the same index, the sum will be zero
//   while (left < right) {
//     let sum = sortedArr[left] + sortedArr[right]
//     if (sum === 0) {
// 			return [sortedArr[left], sortedArr[right]];
// 		} else if (sum > 0) {
// 			right--;
// 		} else {
// 			left++;
// 		}
//   }
// }

// console.log("sumZeroForLoop: ", sumZeroForLoop([-8, -4, -3, -2, -1, 0, 1, 2, 5, 8]));
// console.log("sumZeroWhileLoop: ", sumZeroWhileLoop([-4, -3, -2, -1, 0, 1, 2, 5, 8]));
