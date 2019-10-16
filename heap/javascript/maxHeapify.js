const maxHeapify = (A, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let greater = i;

  if (left < A.length && A[left] > A[i]) {
    greater = left
  }

  if (right < A.length && A[right] > A[greater]) {
    greater = right;
  }

  if (greater !== i) {
    const tmp = A[i];
    A[i] = A[greater];
    A[greater] = tmp;
    maxHeapify(A, greater);
  }
}

const A = [8, 18, 14, 17, 12, 13, 11, 15, 16]

maxHeapify(A, 0);

console.log(A);

// expected: 18, 17, 14, 16, 12, 13, 11, 15, 8
