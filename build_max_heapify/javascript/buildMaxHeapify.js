const maxHeapify = (A, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let greater = i;

  if (left < A.length && A[left] > A[i]) {
    greater = left;
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

const buildMaxHeapify = (A) => {
  for (let i = parseInt((A.length / 2) - 1); i >= 0; i--) {
    maxHeapify(A, i);
    console.log('A: ', A, 'i: ', i);
  }
};

const A = [40, 20, 15, 35, 80, 71, 16, 21, 70, 81, 90];

buildMaxHeapify(A);

console.log(A);
