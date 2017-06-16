#include<stdio.h>

void selection_sort(int* A, int size) {
    int i, j, k, min;

    for (i = 0; i < size - 1; i++) {
        min = A[i];
        k = i;
        for (j = i + 1; j < size; j++) {
            if (A[j] < min) {
                min = A[j];
                k = j;
            }
        }
        A[k] = A[i];
        A[i] = min;
    }
}

int main() {
    int i;
    int size = 6;
    int A[6] = { 5, 2, 4, 6, 1, 3 };

    selection_sort(A, size);

    for (i = 0; i < size; i++)
        printf ("%d ", A[i]);

    return 0;
}
