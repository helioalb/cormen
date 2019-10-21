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

  return i;
};

const quicksort = (A, p, r) => {
  let q;

  if (p < r) {
    q = partition(A, p, r);
    quicksort(A, p, q - 1);
    quicksort(A, q + 1, r);
  }
};

const A = [47, 22, 40, 56, 34, 42, 21, 8, 3, 1, 9, 99, 48];
quicksort(A, 0, A.length - 1);
console.log(A);

