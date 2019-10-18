#include<stdio.h>
void swap(int* A, int a, int b) {
  int tmp = A[a];
  A[a] = A[b];
  A[b] = tmp;
}

void max_heapify(int* A, int m, int i) {
  int left = 2 * i + 1;
  int right = 2 * i + 2;
  int greater = i;

  if (left < m && A[left] > A[i]) {
    greater = left;
  }

  if (right < m && A[right] > A[greater]) {
    greater = right;
  }

  if (greater != i) {
    swap(A, greater, i);
    max_heapify(A, m, greater);
  }
}

int main() {
    int A[9] = { 8, 18, 14, 17, 12, 13, 11, 15, 16 };
    int m = 9;
    int i = 0;

    max_heapify(A, m, i);

    for (i = 0; i < m; i++)
        printf ("%d ", A[i]);

    return 0;
}

// expected: 18 17 14 16 12 13 11 15 8
