function fibTabulation(n) {
  // Tabulation is bottom-up
  if (n <= 2) return 1;
  let tab = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    tab[i] = tab[i-1] + tab[i-2];
  } 
  return tab[n];
}

function fibMemo(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo)
  return memo[n]; 
}

function memoFib(n, memo=[undefined,1,1]) {
  if (memo[n]) return memo[n];
  
  var res = memoFib(n-1, memo) + memoFib(n-2, memo);
  memo[n] = res;
  
  return res;
}

console.log(fibMemo(1), memoFib(1))
console.log(fibMemo(10), memoFib(10))
console.log(fibMemo(5), memoFib(5))
console.log(fibMemo(17), memoFib(17))