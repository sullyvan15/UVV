/*Escrever para cada item abaixo um programa em C que leia 5 valores inteiros positivos e
guarde em um vetor. Após isso, faça:
A) Exibir na tela os termos (e seus respectivos índices) múltiplos de 3.*/
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 5
int main()
{
 int vetor[TAMANHO];
 int i=0;
 printf("ENTRE COM VALORES INTEIROS POSITIVOS\n");
 while(i<TAMANHO)
 {
 printf("\nTermo do vetor de indice [%i]: ", i);
 scanf("%i", &vetor[i]);
 if (vetor[i]>0)
 i++;
 else
 printf("Termo incorreto. Digite novamente.\n");
 }
 printf("\nOs termos e seus indices multiplos de 3 sao:\n");
 for (i=0;i<TAMANHO;i++)
 {
 if (vetor[i] % 3 == 0)
 printf("\nTermo: %i - Indice: %i\n", vetor[i], i);
 }
 return 0;
}






/*Escrever para cada item abaixo um programa em C que leia 5 valores inteiros positivos e
guarde em um vetor. Após isso, faça:
B) Exibir na tela os termos (e seus respectivos índices) ÍMPARES e múltiplos de 7.*/
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10
int main()
{
 int vetor[TAMANHO];
 int i=0;
 printf("Entre com valores inteiros positivos:\n");
 while(i < TAMANHO)
 {
 printf("\nTermo do vetor de indice [%i]: ", i);
 scanf("%i", &vetor[i]);
 if (vetor[i]>0)
 i++;
 else
 printf("Termo incorreto. Digite novamente.\n");
 }
 for (i=0;i<TAMANHO;i++)
 {
 if (vetor[i] % 2 != 0 && vetor[i] % 7 == 0)
 printf("\nTermo: %i - Indice: %i\n", vetor[i], i);
 }
 return 0;
}






/*Escrever para cada item abaixo um programa em C que leia 5 valores inteiros positivos e
guarde em um vetor. Após isso, faça:
C) Exibir na tela a soma dos termos múltiplos de 3 e 4.*/
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10
int main()
{
 int vetor[TAMANHO];
 int i=0;
 int soma=0;
 printf("Entre com valores inteiros positivos:\n");
 while(i<TAMANHO)
 {
 printf("\nTermo do vetor de indice [%i]: ", i);
 scanf("%i", &vetor[i]);
 if (vetor[i]>0)
 i++;
 else
 printf("Termo incorreto. Digite novamente.\n");
 }
 for (i=0;i<TAMANHO;i++)
 {
 if (vetor[i] % 3 == 0 && vetor[i] % 4 == 0)
 soma = soma + vetor[i];
 }
 printf("\nA soma dos termos MULTIPLOS de 3 e 4 e: %i\n", soma);
 return 0;
}






/*Escrever para cada item abaixo um programa em C que leia 10 valores inteiros positivos e
guarde em um vetor. Após isso, faça:
D) Exibir na tela a média da soma dos termos múltiplos de 2 e 5.*/
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10
int main()
{
 int vetor[TAMANHO], i=0, soma=0, quantidade=0;
 float media;
 printf("Entre com valores inteiros positivos:\n");
 while(i<TAMANHO)
 {
 printf("\nTermo do vetor de indice [%i]: ", i);
 scanf("%i", &vetor[i]);
 if (vetor[i]>0)
 i++;
 else
 printf("Termo incorreto. Digite novamente.\n");
 }
 for (i=0;i<TAMANHO;i++)
 {
 if (vetor[i] % 2 == 0 && vetor[i] % 5 == 0)
 {
 soma=soma+vetor[i];
 quantidade=quantidade+1;
 }
 }
 media=1.0*soma/quantidade;
 printf("\nA media da soma dos termos MULTIPLOS de 2 e 5 e: %.f", media);
 printf("\n");
 return 0;
}






/*Escrever para cada item abaixo um programa em C que leia 10 valores inteiros positivos e
guarde em um vetor. Após isso, faça:
F) Exibir na tela os termos maiores que a média da soma dos termos que estão nos índices: 0
e 4*/
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
 soma=vetor[0]+vetor[4];
 media=soma/2;
 for (i=0;i<TAMANHO;i++)
 {
 if (vetor[i]>media)
 printf("\n%i", vetor[i]);
 }
 printf("\n");
 return 0;
}






/*Escrever para cada item abaixo um programa em C que leia 5 valores inteiros positivos e
guarde em um vetor. Após isso, faça:
G) Exibir a soma dos termos ÍMPARES imediatamente sucessores dos termos armazenados.*/
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10
int main()
{
 int vetor[TAMANHO],soma=0,i=0;
 printf("Entre com valores inteiros positivos\n");
 while(i<TAMANHO)
 {
 printf("\nTermo do vetor de indice [%i]: ", i);
 scanf("%i", &vetor[i]);
 if (vetor[i]>0)
 i++;
 else
 printf("Termo incorreto. Digite novamente.\n");
 }
 for (i=0;i<TAMANHO;i++)
 {
 if (vetor[i] % 2== 0)
 {
 soma = soma + vetor[i]+1;
 }
 }
 printf("%i", soma);
 return 0;
}








/*Escrever para cada item abaixo um programa em C que leia 10 valores inteiros positivos e
guarde em um vetor. Após isso, faça:
E) Exibir na tela a soma dos termos múltiplos de 3 ou 5.*/
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