class InsertionSort implements Sorter {
    private int[] A;

    public InsertionSort(int[] A) {
        this.A = A;
    }

    public int[] sort() {
        for (int j = 1; j < A.length; j++) {
            int i = j - 1;
            int key = A[j];

            while (i >= 0 && key < A[i]) {
                A[i + 1] = A[i--];
            }
            A[i + 1] = key;
        }

        return A;
    }
}
