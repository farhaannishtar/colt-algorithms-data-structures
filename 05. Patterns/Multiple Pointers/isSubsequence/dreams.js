// ### Description
// Input: 2 strings
// Goal: see if str1 form a subsequence of the characters of str2. Order must not change.

// ### Examples
// sing, sting -> True
// sing, sngi -> False
// abc, abracadabra -> True

function isSubsequence(str1, str2) {
  let str1Pointer = 0;
  let str2Pointer = 0;

  while (str1Pointer < str1.length - 1) {
    if (str1[str1Pointer] === str2[str2Pointer]) {
      str1Pointer++;
      str2Pointer++;
    } else {
      str2Pointer++;
      if (str2Pointer === str2.length-1) return false;
    }
  }

  return true
}


// ### Examples
// sing, sting -> True
// sing, sngi -> False
// abc, abracadabra -> True

console.log('"sing", "sting"', isSubsequence("sing", "sting"));
console.log(isSubsequence("sing", "sngi"));
console.log(isSubsequence("abc", "abracadabra"));
