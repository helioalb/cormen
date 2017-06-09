#include<stdio.h>

void insertion_sort_inverted(int* A, int size) {
    int j, i, key;

    for (j = 0; j < size; j++) {
        key = A[j];
        i = j - 1;

        while (i >= 0 && key > A[i]) {
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
              
      insertion_sort_inverted(A, size);
                  
      for (i = 0; i < size; i++) {
          printf ("%d ", A[i]);
      }    
}
