const swap = (A, a, b) => {
  const tmp = A[a];
  A[a] = A[b];
  A[b] = tmp;
};

const partition = (A, p, r) => {
  let i = p - 1;
  let j = p;

  while (j < r) {
    if (A[j] < A[r]) {
      swap(A, ++i, j);
    }
    j++;
  }
  swap(A, ++i, j);
};


const A = [47, 22, 40, 56, 34, 42];
partition(A, 0, 5);
console.log(A);

const B = [22, 47, 40, 56, 34, 42];
partition(B, 0, 5);
console.log(B);
