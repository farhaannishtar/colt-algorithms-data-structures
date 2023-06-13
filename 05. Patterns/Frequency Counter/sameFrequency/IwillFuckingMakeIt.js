// ### Description
// Both numbers have the same digits (order doesn't matter)

// Return: true/false

// ### Examples
// 182, 281 -> True
// 34, 41 -> False
// 3589578, 5879385 -> True
// 22, 222 -> False

function professionalFarhaan(num1, num2) {
  let frequencyCounter1 = {};  
  let frequencyCounter2 = {};
  for (digit of num1.toString()) {
    frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1
  }     
  for (digit of num2.toString()) {
    frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1
  }      
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(professionalFarhaan(182, 281));
console.log(professionalFarhaan(34, 41));
console.log(professionalFarhaan(3589578, 5879385));
console.log(professionalFarhaan(22, 222));