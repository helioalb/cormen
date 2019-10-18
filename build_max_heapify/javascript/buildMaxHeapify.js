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
    greater = left;
  }

  if (right < m && A[right] > A[greater]) {
    greater = right;
  }

  if (greater !== i) {
    swap(A, i, greater);
    maxHeapify(A, m, greater);
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
