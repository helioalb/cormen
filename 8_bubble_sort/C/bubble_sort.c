#include<stdio.h>

void bubble_sort(int* A, int size) {
    int i, j, tmp;

    for (int i = 0; i < size; i++) {
      for (int j = size; j > i; j--) {
        if (A[j-1] > A[j]) {
          tmp = A[j];
          A[j] = A[j-1];
          A[j-1] = tmp;
        }
      }
    }
}

int main() {
    int i;
    int size = 6;
    int A[6] = { 5, 2, 4, 6, 1, 3 };

    bubble_sort(A, size);

    for (i = 0; i < size; i++)
        printf ("%d ", A[i]);

    return 0;
}
