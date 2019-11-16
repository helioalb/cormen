class Node {
  constructor(content, left, right) {
    this.content = content;
    this.left = left;
    this.right = right;
  }
}

const bst = (root, target) => {
  if (!root || root.content === target) {
    return root;
  } else {
    if (target < root.content) {
      return bst(root.left, target);
    } else {
      return bst(root.right, target);
    }
  }
};

const root = new Node(8, new Node(3, new Node(1), new Node(6, new Node(4), new Node(7))), new Node(10, null, new Node(14, new Node(13))));

console.log(!!bst(root, 8));
console.log(!!bst(root, 3));
console.log(!!bst(root, 10));
console.log(!!bst(root, 1));
console.log(!!bst(root, 6));
console.log(!!bst(root, 14));
console.log(!!bst(root, 4));
console.log(!!bst(root, 7));
console.log(!!bst(root, 13));
console.log(bst(root, 70));

/*
            8
           / \
          /.  \
         3    10
        /\     \
       /  \.    \
      1   6     14
         /\     /
        /  \.  /
       4   7  13
*/
