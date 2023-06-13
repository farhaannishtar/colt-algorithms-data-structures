function areThereDuplicates(...args) {
    const sortedArr = args.sort();
    let curr = 0;

    for (let scout = 1; scout <= sortedArr.length - 1; scout++) {
        if (sortedArr[curr] === sortedArr[scout]) return true;

        curr = scout;
    }

    return false;
}

function areThereDuplicatesFarhaan(...args) {
  const sortedArr = args.sort();
  let currentIndex = 0;
  for (let scout = 1; scout < sortedArr.length; scout++) {
    if (sortedArr[currentIndex] === sortedArr[scout]) return true;

    currentIndex = scout;
  }
}









































