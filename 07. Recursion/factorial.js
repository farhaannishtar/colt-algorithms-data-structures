function factorial(num) {
  if (num <= 1) return num;

  return num * factorial(num - 1);
}
/*
factorial(4)
            4 * factorial(3)
                            3 * factorial(2)
                                            2 * factorial(1)
                                            2
                            6
            24
*/


console.log("Motivating line");

function factorialFarhaan(num) {
  if (num === 1) return 1;
  return num * factorialFarhaan(num-1);
}

console.log(factorial(6));
console.log(factorialFarhaan(6));