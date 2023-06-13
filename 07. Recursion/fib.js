// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
    const fibArr = [1, 1];

    function helper(fibArr) {
        if (fibArr.length === num) return;

        const numTerms = fibArr.length;
        const numToAdd = fibArr[numTerms - 1] + fibArr[numTerms - 2];

        fibArr.push(numToAdd);

        helper(fibArr, num);
    }
    helper(fibArr);

    return fibArr[num - 1];
}

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// Write a recursive function called fib which accepts a number and 
// returns the nth number in the Fibonacci sequence. Recall that the 
// Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter is equal to 
// the sum of the previous two numbers.

function fibFarhaan(n) {
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

console.log(fibFarhaan(6));