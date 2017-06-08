#include <stdio.h>

void insertion_sort(int* A, int size) {
    int i, j, key;

    for (j = 1; j < size; j++) {
        i = j - 1;
        key = A[j];

        while (i >= 0 && key < A[i]) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
  }
}


int main() {   
    int i;
    int size = 6;
    int A[6] = { 5, 2, 4, 6, 1, 3 };

    insertion_sort(A, size);

    for (i = 0; i < size; i++) {
        printf ("%d ", A[i]);
    }    
}
