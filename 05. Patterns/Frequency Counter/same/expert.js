// 1. Both arrays have same length
// 2. For each element in arr1, there is a squared equivalent in arr2
// 3. Make sure frequencies are the same 

function programmingWizard(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1; 
  }
  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1; 
  }
  for (let key of arr1) {
    // console.log(key);
    if (!(key**2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key**2]) return false;
  }
  return true;
}



console.log(programmingWizard([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false
console.log(programmingWizard([1, 2, 3, 4, 5], [9, 25, 1, 16, 4])); // true