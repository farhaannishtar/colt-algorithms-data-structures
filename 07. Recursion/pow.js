// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

function powerFarhaan(base, exp) {
  if (exp === 0) return 1;
  return base * powerFarhaan(base, exp - 1);
}

console.log("2^2: ", powerFarhaan(2, 2));



// console.log("2, 0: ", power(2, 0));
// console.log("2, 0: ", powerFarhaan(2, 0));
// console.log('~~~~~~')
// console.log("2, 1: ", power(2, 1));
// console.log("2, 1: ", powerFarhaan(2, 1));

// console.log('~~~~~~')
// console.log("2, 2: ", power(2, 2));
// console.log("2, 2: ", powerFarhaan(2, 2));

// console.log('~~~~~~')
// console.log("2, 5: ", power(2, 5));
// console.log("2, 5: ", powerFarhaan(2, 5));