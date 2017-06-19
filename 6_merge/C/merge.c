#include<stdio.h>
#include<stdlib.h>

void merge(int* A, int p, int q, int r) {
    int n = r - p + 1;
    int i = p;
    int j = q + 1;
    int k = 0;
    int* B = calloc(n, sizeof (int));

    while (i <= q && j <= r)
        if (A[i] < A[j])
            B[k++] = A[i++];
        else
            B[k++] = A[j++];

    while (k < n)
        if (i > q)
            B[k++] = A[j++];
        else
            B[k++] = A[i++];

    for (i = 0; i < n; i++)
        A[p++] = B[i];
}

void print_array(int* A, int size) {
    int i;
    
    for (i = 0; i < size; i++)
        printf("%d ", A[i]);
    printf("\n");
}

int main() {
    int A[8] = { 1, 3, 5, 6, 2, 4, 7, 8 };
    int B[15] = { 9, 9, 9, 1, 3, 5, 6, 2, 4, 7, 8, 9, 9, 9, 9 };
    int C[8] = { 2, 4, 7, 8, 1, 3, 5, 6 };
    int D[15] = { 9, 9, 9, 2, 4, 7, 8, 1, 3, 5, 6, 9, 9, 9, 9 }; 

    merge(A, 0, 3, 7);
    print_array(A, 8);

    merge(B, 3, 6, 10);
    print_array(B, 15);

    merge(C, 0, 3, 7);
    print_array(A, 8);

    merge(D, 3, 6, 10);
    print_array(B, 15);

    return 0;
}
