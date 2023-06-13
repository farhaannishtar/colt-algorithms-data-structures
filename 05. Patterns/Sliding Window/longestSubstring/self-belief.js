// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring,
// which accepts a string and returns the length of 
// the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  let hash = {};
  let count = 0;
  let tempCount = 0;
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] in hash) {
      count = Math.max(count, tempCount);
      hash = {};
      hash[strArr[i]] = 1;
      tempCount = 1;
      console.log(strArr.slice(i).join(''))
    } else {
      tempCount++;
      count = Math.max(count, tempCount);
      hash[strArr[i]] = 1;
    } 
  }
  console.log(count)
}

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6