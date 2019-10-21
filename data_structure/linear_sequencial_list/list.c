#include <stdio.h>
#include <stdbool.h>

#define MAX 50

typedef int KEY;

typedef struct {
  KEY key;
} NODE;

typedef struct {
  NODE A[MAX];
  int number_of_elements;
} LIST;

void initialize(LIST* l) {
  l->number_of_elements = 0;
}

int size(LIST* l) {
  return l->number_of_elements;
}

void show(LIST* l) {
  for (int i = 0; i < l->number_of_elements; i++) {
    printf("%i ", l->A[i].key);
  }
}

int search(LIST* l, KEY key) {
  int i = 0;

  while (i < l->number_of_elements) {
    if (key == l->A[i].key) return i;
    i++;
  }

  return -1;
}

bool insert(LIST*l, NODE node, int position) {
  if (l->number_of_elements == MAX || (position < 0 || position > l->number_of_elements)) {
    return false;
  }

  for (int j = l->number_of_elements; j > position; j--) {
    l->A[j] = l->A[j - 1];
  }

  l->A[position] = node;
  l->number_of_elements++;

  return true;
}

bool delete(LIST* l, KEY key) {
  int position = search(l, key);

  if (position == -1) return false;

  l->number_of_elements--;

  for (int j = position; j < l->number_of_elements; j++) {
    l->A[j] = l->A[j + 1];
  }

  return true;
}

int main(int argc, char const *argv[]) {
  LIST list;

  initialize(&list);

  for (int i = 0; i < 10; ++i) {
    NODE node;
    node.key = i;

    insert(&list, node, 0);
  }

  delete(&list, 2);
  show(&list);

  printf("\nList size: %i \n", size(&list));

  return 0;
}
