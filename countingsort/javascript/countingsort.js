const countingsort = (A, k) => {
  const B = [];
  const C = [];

  // set accumulator with zero
  for (let i = 0; i <= k; i++) {
    C[i] = 0;
  }

  // Count number of items of each element
  for(let i = 0; i < A.length; i++) {
    C[A[i]]++;
  }

  // Acummulate number of items less than or equal current number
  for(let i = 1; i <= k; i++) {
    C[i] += C[i - 1];
  }

  // Create sorted vector(B)
  for(let i = A.length - 1; i >= 0; i--) {
    B[C[A[i]] - 1] = A[i];
    C[A[i]]--;
  }

  return B;
};

const A = [9,8,7,6,5,4,3,2,1,0];
const k = 9;

const sorted = countingsort(A, k);
console.log(sorted);
