class Node {
  constructor(content, left, right) {
    this.content = content;
    this.left = left;
    this.right = right;
  }
}

const bstMaximumIterative = (root) => {
  if (root) {
    let pointer = root;

    while(pointer.right) {
      pointer = pointer.right;
    }

    return pointer.content;
  }
}

const root = new Node(8, new Node(3, new Node(1), new Node(6, new Node(4), new Node(7))), new Node(10, null, new Node(14, new Node(13))));

console.log(bstMaximumIterative(root));

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
