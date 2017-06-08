class Main {
    public static void main(String[] args) {
        int[] A = { 5, 2, 4, 6, 1, 3 };
        Sorter insertionSort = new InsertionSort(A);

        for (int i : insertionSort.sort()) {
            System.out.print(i + " ");
        }
    }
}
