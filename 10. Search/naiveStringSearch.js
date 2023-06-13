// How many times does a substring appear in a string?
function naiveStringSearch(str, substr) {
	let windowStart = 0;
	let windowEnd = substr.length - 1;
	let count = 0;

	while (windowEnd < str.length) {
		let windowStr = str.slice(windowStart, windowEnd + 1);

		while (true) {
			let stringsMatch = true;

			for (let i = 0; i < windowStr.length; i++) {
				if (windowStr[i] !== substr[i]) {
					stringsMatch = false;
					break;
				}
			}

			if (stringsMatch) {
				count++;
			}

			break;
		}

		windowStart++;
		windowEnd++;
	}

	return count;
}

// Refactored - Colt's Version
function naiveStringSearch(long, short) {
	let count = 0;

	for (let i = 0; i < long.length; i++) {

		for (let j = 0; j < short.length; j++) {

			if (short[j] !== long[i+j]) break;
			if (j === short.length - 1) count++;
		}

	}

	return count;
}

function naiveStringSearchFarhaan(str, subStr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) break
      if (j == subStr.length-1) count++;
    }
  }
  return count;
}


console.log(naiveStringSearch("wowomgzomg", "abc"));  // 0
console.log(naiveStringSearchFarhaan("wowomgzomg", "abc"));  // 0
console.log("~~~~~~~~`")

console.log(naiveStringSearch("lorie loled", "lol"));  // 1
console.log(naiveStringSearchFarhaan("lorie loled", "lol"));  // 1
console.log("~~~~~~~~`")


console.log(naiveStringSearch("harold said haha in hamburg", "haha"));  // 1
console.log(naiveStringSearchFarhaan("harold said haha in hamburg", "haha"));  // 1
console.log("~~~~~~~~`")

console.log(naiveStringSearch("wowomgzomg", "omg"));  // 2
console.log(naiveStringSearchFarhaan("wowomgzomg", "omg"));  // 2
