#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{
  int* y = (int*) malloc(sizeof(int));

  *y = 20;

  int z = sizeof(int);

  printf("%i, %i\n", *y, z);

  return 0;
}
