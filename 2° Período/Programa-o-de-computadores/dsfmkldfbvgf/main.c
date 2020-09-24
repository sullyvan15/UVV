#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10
int main()
{
 int vetor[TAMANHO],i=0,soma=0,media=0;
 printf("Entre com valores inteiros positivos:\n\n");
 while(i<TAMANHO)
 {
 printf("Termo do vetor de indice [%i]: ", i);
 scanf("%i", &vetor[i]);
 if (vetor[i]>0)
 i++;
 else
 printf("Termo incorreto. Digite novamente.\n");
 }
 soma=vetor[1]+vetor[3]+vetor[6];
 media=soma/3;
 for (i=0;i<TAMANHO;i++)
 {
 if (vetor[i]>media)
 printf("\n%i", vetor[i]);
 }
 printf("\n");
 return 0;
}
