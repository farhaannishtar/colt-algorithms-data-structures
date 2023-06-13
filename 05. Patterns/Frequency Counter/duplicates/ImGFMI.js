// ### Description
// - Function accepts variable number of ARGs
// - Determine if there are any duplicates

// ### Return
// Duplicates -> True
// No duplicates -> False

// ### Example
// a, b, c -> False
// a, b, c, d, a -> True
// 1, 1 -> True

function rockStarDev(...args) {
  console.log(args);
  let counter = {};
  for (arg of args) {
    if (arg in counter) return true;
    counter[arg] = 1;
  }
  return false;
}


console.log(rockStarDev(1, 2, 3, 4, 5, 5, 'girlfriend', 'natalia', 'don\'t be a bad boy friend'))
console.log(rockStarDev('a', 'b', 'c'))
console.log(rockStarDev('a', 'b', 'c', 'd', 'a'))
console.log(rockStarDev(1, 1))
