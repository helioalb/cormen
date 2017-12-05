function bubbleSort(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = A.length; j > 0; j--) {
      if (A[j-1] > A[j]) {
        let tmp = A[j];
        A[j] = A[j-1];
        A[j-1] = tmp;
      }
    }
  }
}


let A = [8, 2, 8, 3, 8, 4, 8, 5, 7];

bubbleSort(A);

A.forEach(function(element) {
  console.log(element);
});
