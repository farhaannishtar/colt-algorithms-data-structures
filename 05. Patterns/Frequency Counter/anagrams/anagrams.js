function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const counter1 = {};
  const counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  for (let key in counter1) {
    if (!counter2[key]) return false;
    if (!(counter1[key] === counter2[key])) return false;
  }

  return true;
}


const iOnlyHaveOneShot_validAnagram = (str1, str2) => {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }
  for (char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }
  }
  return true;
}






console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('aazz', 'zzaa'));

console.log(iOnlyHaveOneShot_validAnagram('anagram', 'nagaram'));
console.log(iOnlyHaveOneShot_validAnagram('aaz', 'zza'));
console.log(iOnlyHaveOneShot_validAnagram('aazz', 'zzaa'));




