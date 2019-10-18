const swap = (A, a, b) => {
  const tmp = A[a];
  A[a] = A[b];
  A[b] = tmp;
};

const maxHeapify = (A, m, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let greater = i;

  if (left < m && A[left] > A[i]) {
    greater = left
  }

  if (right < m && A[right] > A[greater]) {
    greater = right;
  }

  if (greater !== i) {
    swap(A, i, greater);
    maxHeapify(A, m, greater);
  }
};

const A = [8, 18, 14, 17, 12, 13, 11, 15, 16]

maxHeapify(A, A.length, 0);

console.log(A);

// expected: 18, 17, 14, 16, 12, 13, 11, 15, 8
