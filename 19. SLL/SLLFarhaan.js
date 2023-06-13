class Node {
  constructor(val) {
    this.val = val;
    this.next = null; 
  }
} 

class SLLFarhaan {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    } 
    this.tail = newTail;
    this.tail.next = null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current
  }
  // remove and return the head of the SLL
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    if (this.length === 0) this.tail = null;
    this.length--;
    return currentHead;
  }

  // Add to the head of the SLL
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Retrieving a node by it's position in the SLL
  get(index) {
    if (index < 0 || index > this.length-1) {
      return undefined;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false
    node.val = val;
    return true
  }

  insert(index, val) {
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(val);
    const previousNode = this.get(index-1);
    const nextNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true; 
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length-1) return !!this.pop();

    const previousNode = this.get(index-1);
    const removedNode = previousNode.next;
    previousNode.next = previousNode.next.next;
    this.length--;
    return removedNode;
  }

} 

const gonnaMakeIt = new SLLFarhaan();
gonnaMakeIt.push("I'm consistent in the time and effort I spend learning");
gonnaMakeIt.push("Today is a new DAY");
gonnaMakeIt.push("Not going to waste time");
gonnaMakeIt.push("However poorly or well I do in terms of productivity, I can start from where I left off");
console.log("+++++++++++++++");
console.log(gonnaMakeIt.remove(2));
console.log("+++++++++++++++");
console.log(gonnaMakeIt);``


