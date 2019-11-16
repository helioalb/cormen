class Node {
  constructor(content, left, right) {
    this.content = content;
    this.left = left;
    this.right = right;
  }
}

const bstMaximumRecursive = (root) => {
  if (root && root.right != null) {
    return bstMaximumRecursive(root.right);
  }

  return root.content;
};

const root = new Node(8, new Node(3, new Node(1), new Node(6, new Node(4), new Node(7))), new Node(10, null, new Node(14, new Node(13))));

console.log(bstMaximumRecursive(root));

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
