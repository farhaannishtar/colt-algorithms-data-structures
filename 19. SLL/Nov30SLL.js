class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLLNov {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head || !this.tail) return;
    
    let currentNode = this.head;
    let newTail = currentNode;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return this;
    }

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.size -= 1;
    return currentNode;
  }

  shift() {
    // remove first element
    if (!this.size) return;
    if (this.size === 1) this.tail = null; 
    let oldHead = this.head;
    this.head = oldHead.next;
    this.size -= 1;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
  }

  
  set(index, val) {
    let foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return foundNode;
  }
  
  insert(index, val) {
    if (index < 0 || index >= this.size) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.size-1) {
      this.push(val);
      return true;
    }
    let previousNode = this.get(index-1);
    let nextNode = previousNode.next;
    let newNode = new Node(val);
    previousNode.next = newNode;
    newNode.next = nextNode;
    this.size += 1;
    return true;
  }

  get(index) {
    if (index < 0 || index >= this.size) return null;

    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    console.log(currentNode);
  }

}

const lgtm = new SLLNov();
lgtm.push(0);
lgtm.push(1);
lgtm.push(2);
lgtm.get(1);
// lgtm.insert(5, 69);
// console.log('I got this: ', lgtm.get(5));
// console.log(lgtm.set(0, 25))
// console.log('Work Hard: ', lgtm);




