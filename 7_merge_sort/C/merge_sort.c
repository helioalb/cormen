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

void merge_sort(int* A, int p, int r) {
    if (p < r) {
        int q = (p + r) / 2;
        merge_sort(A, p, q);
        merge_sort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

int main() {
    int A[8] = { 3, 5, 1, 7, 5, 8, 9, 5 };
    int B[15] = { 1, 0, 9, 2, 8, 3, 7, 4, 6, 5, 8, 2, 6, 2, 1 };
    int C[1] = { 1 };
    int D[4] = { 1, 3, 2, 4 };
    int E[4] = { 4, 3, 2, 1 };
    merge_sort(A, 0, 7);
    print_array(A, 8);

    merge_sort(B, 0, 14);
    print_array(B, 15);

    merge_sort(C, 0, 0);
    print_array(C, 1);

    merge_sort(D, 0, 4);
    print_array(D, 4);

    merge_sort(E, 0, 4);
    print_array(E, 4);

    return 0;
}
