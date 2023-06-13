class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) console.log("WE EMPTY!")
    this.count--;
    const poppedElement = this.items[this.count];
    delete this.items[this.count];
    return poppedElement;
  }

  size() {
    return this.count 
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    let objString = this.items[0];
    for (let i = 1; i < this.count; i++) {
      objString = objString + `\n${this.items[i]}`;
    }
    return objString;
  }
}

const priorities = new Stack();

console.log(priorities.size());
priorities.push("Let her live laugh and love");
priorities.push("Just enjoy her company.. that's it.. no attachments");
priorities.push("Love is a big responsibility")


console.log(priorities.toString());

priorities.pop();
priorities.pop();
priorities.pop();
priorities.pop();

console.log('\n', priorities.toString());
