#include<stdio.h>

void insertion_sort(int* A, int size_A) {
  int i, j;
  int key;

  for (j = 1; j < size_A; j++) {
    key = A[j];
    i = j - 1;

    while (i >= 0 && A[i] > key) {
      A[i + 1] = A[i];
      i = i - 1;
    }
    A[i + 1] = key;
  }
}

int main() {
  int i;
  int A[5] = { 5, 4, 3, 2, 1 };

  insertion_sort(A, 5);

  for (i = 0; i < 5; i++) {
    printf("%d ", A[i]);
  }
}
