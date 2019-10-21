#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[]) {
  typedef struct {
    int peso;
    int altura;
  } PesoAltura;

  PesoAltura* pessoa1 = (PesoAltura*) malloc(sizeof(PesoAltura));

  pessoa1->peso = 74;
  pessoa1->altura = 173;

  printf("%i, %i\n", pessoa1->peso, pessoa1->altura);
  return 0;
}
