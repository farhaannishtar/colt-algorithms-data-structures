class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === value) return null;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  BFS() {
    let queue = [];
    let visited = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      visited.push(node.value);
    }
    return visited;
  }

  DFSPreOrder() {
    if (!this.root) return undefined;
    let visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    let visited = [];
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  find(value) {
    if (!this.root) {
      return "Tree is empty";
    }
  }
}
const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log("tree.find()): ", tree.find(8));
// console.log("BFS: ", tree.BFS());
// console.log("DFSPreOrder: ", tree.DFSPreOrder());
// console.log("DFSPostOrder: ", tree.DFSPostOrder());
// console.log("DFSInOrder: ", tree.DFSInOrder());

// BFS:  [ 10, 6, 15, 3, 8, 20 ]
// DFSPreOrder:  [ 10, 6, 3, 8, 15, 20 ]
// DFSPostOrder:  [ 3, 8, 6, 20, 15, 10 ]
// DFSInOrder:  [ 3, 6, 8, 10, 15, 20 ]

// find(value) {
//   if (!this.root) return undefined;
//   let found = false,
//     current = this.root;
//   while (current && !found) {
//     if (current.value === value) found = true;
//     if (value < current.value) current = current.left;
//     if (value > current.value) current = current.right;
//   }
//   if (!found) console.log("Not Found");
//   return current;
// }
