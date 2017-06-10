#include<stdio.h>

int linear_search(int* A, int size, int v) {
    int i = 0;

    for (i = 0; i < size; i++)
        if (A[i] == v)
            return i;
    return -1;
}

int main() {
    int result;
    int A[5] = { 1, 7, 8, 3, 6 };

    result = linear_search(A, 5, 3);

    printf("%d\n", result);

    result = linear_search(A, 5, 18);

    printf("%d\n", result);

    return 0;
} 
