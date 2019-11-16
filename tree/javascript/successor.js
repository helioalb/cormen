class Node {
  constructor(content, father, left, right) {
    this.content = content;
    this.father = father;
    this.left = left;
    this.right = right;
  }
}

const minimum = (root) => {
  if (root) {
    let p = root;

    while (p.left) {
      p = p.left;
    }

    return p;
  }
}

const successor = (root) => {
  if (root) {
    if (root.right) {
      return minimum(root.right);
    } else {
      let p = root.father;
      let ant = root;

      while (p && p.right === ant) {
        ant = p;
        p = p.father;
      }

      return p;
    }
  }
}

const n8 = new Node(8);
const n3 = new Node(3);
const n10 = new Node(10);
const n1 = new Node(1);
const n6 = new Node(6);
const n4 = new Node(4);
const n7 = new Node(7);
const n14 = new Node(14);
const n13 = new Node(13);

n8.father = null;
n8.left = n3;
n8.right = n10;

n3.father = n8;
n3.left = n1;
n3.right = n6;

n10.father = n8;
n10.left = null;
n10.right = n14;

n1.father = n3;
n1.left = null;
n1.right = null;

n6.father = n3;
n6.left = n4;
n6.right = n7;

n4.father = n6;
n4.left = null;
n4.right = null;

n7.father = n6;
n7.left = null;
n7.right = null;

n14.father = n10;
n14.left = n13;
n14.right = null;

n13.father = n14;
n13.left = null;
n13.right = null;


console.log('1 -> ', successor(n1).content);
console.log('3 -> ', successor(n3).content);
console.log('4 -> ', successor(n4).content);
console.log('6 -> ', successor(n6).content);
console.log('7 -> ', successor(n7).content);
console.log('8 -> ', successor(n8).content);
console.log('10 -> ', successor(n10).content);
console.log('13 -> ', successor(n13).content);
console.log('14 -> ', successor(n14));

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
