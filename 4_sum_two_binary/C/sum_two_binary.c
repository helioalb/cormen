#include<stdio.h>

void sum_two_binary(int* A, int* B, int* C, int size) {
    int n = size - 1;
    
    do {
        int sum = A[n] + B[n] + C[n + 1];

        if (sum == 0) {
            C[n + 1] = 0;
        } else if (sum == 1) {
            C[n + 1] = 1;
        } else {
            C[n + 1] = 0;
            C[n] = 1;
        }
        n = n - 1;
    } while (n >= 0);
}

int main() {
    int i;
    int size = 3;
    int A[3] = { 1, 0, 1 };
    int B[3] = { 1, 0, 1 };
    int C[4] = { 0, 0, 0, 0 };

    sum_two_binary(A, B, C, size);

    for (i = 0; i <= size; i++)
        printf("%d", C[i]);
    printf("\n");
}
