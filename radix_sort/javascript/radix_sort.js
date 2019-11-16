const countingsort = (A, k) => {
  const B = [];
  const C = [];

  for(let i = 0; i <= k; i++) {
    C[i] = 0;
  }

  for(let i = 0; i < A.length; i++) {
    C[A[i]]++;
  }

  for(let j = 1; j <= k; j++) {
    C[j] += C[j - 1];
  }

  for(let i = A.length - 1; i >= 0; i--) {
    B[C[A[i] - 1]] = A[i];
    C[A[i]]--;
  }

  return B;
};

const numberFromDigit = (number, digit) => {
  return parseInt(String(number)[digit - 1]) || 0;
}


// const radixsort = (A, d) => {
//   for(let i = d; i >= 1; i--) {
//     A = countingsort(A, 9, d);
//   }

//   return A;
// }


const A = [9,8,7,6,5,4,3,2,1,0];

console.log(countingsort(A, 9));
