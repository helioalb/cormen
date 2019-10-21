#include <stdio.h>

int main(int argc, char const *argv[])
{
  int x = 3;
  printf("%i\n", x);

  int* y = &x;
  printf("%p\n", y);

  printf("%i\n", *y);

  *y = 5;

  printf("%i\n", x);
  return 0;
}
