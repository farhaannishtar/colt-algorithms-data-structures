function areThereDuplicates(...args) {
  const counter = {};

  for (let entry of args) {
      if (counter[entry]) {
          return true;
      }

      counter[entry] = 1;
  }

  return false;
}

// console.log(areThereDuplicates(1, 2, 3, 4, 5, 5))


function iAmLearningAndGrowing(...args) {
  console.log(args);
  const counter = {}

  for (let entry of args) {
    if (counter[entry]) return true;
    counter[entry] = 1;
  }
  return false
}

console.log(iAmLearningAndGrowing("I AM GOING TO BE FINE", 2, "THREE", 2));
