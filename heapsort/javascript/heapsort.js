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
    swap(A, greater, i);
    maxHeapify(A, m, greater);
  }
};

const buildMaxHeapify = (A, m) => {
  for (let i = parseInt(m/2) - 1; i >= 0; i--) {
    maxHeapify(A, m, i);
  }
};

const heapsort = (A, n) => {
  let m = n;
  buildMaxHeapify(A, m);

  for(let i = n - 1; i > 0; i--) {
    swap(A, i, 0);
    m = m - 1;
    maxHeapify(A, m, 0);
  }
};


const A = [40, 20, 15, 18, 28, 11, 90, 22, 18];

heapsort(A, A.length);

console.log(A);

// expected: 11, 15, 18, 18, 20, 22, 28, 40, 90
