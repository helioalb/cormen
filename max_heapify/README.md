```
MAX-HEAPIFY(A, m, i)
  left <- 2 * i
  rigth <- 2 * i + 1
  greater <- i

  IF left <= m && A[left] > A[i]
    then greater <- left

  IF right <=m && A[right] > A[greater]
    then greater <- right

  IF greater != i
    A[i] <-> A[greater]
    MAX-HEAPIFY(A, m, greater)
```
reference: https://www.youtube.com/watch?v=hyedRznKnjQ
