function merge(A, p, q, r) {
  let i = p;
  let j = q + 1;
  const B = [];

  for(let k = 0; k < (r - p + 1); k++) {
    if (i <= q && j <= r) {
      if (A[i] < A[j]) {
        B[k] = A[i];
        i = i + 1;
      } else {
        B[k] = A[j];
        j = j + 1;
      }
    } else {
      if (i > q) {
        B[k] = A[j];
        j = j + 1;
      } else {
        B[k] = A[i];
        i = i + 1;
      }
    }
  }

  let k = 0;

  for(let i = p; i <= r; i++) {
    A[i] = B[k];
    k = k + 1;
  }
}


A = [1, 1, 1, 4, 5, 6, 1, 2, 3, 9, 9, 9];

merge(A, 3, 5, 8);

console.log(A);
