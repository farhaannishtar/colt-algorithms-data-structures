function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// console.log(validAnagram('anagrams', 'nagaram'));
console.log(validAnagram('anagrmam', 'anagramm'));



// My first solution

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }
//   const frequencyCounter1 = {};
//   const frequencyCounter2 = {};
//   for (val of str1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//   }
//   for (val of str2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//   }
//   for (key in frequencyCounter1) {
//     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//       return false;
//     }
//   }
//   return true;
// }