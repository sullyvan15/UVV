#include <stdio.h>
#include <stdlib.h>

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define TAMANHO 50
int main()
{
    char palavra[TAMANHO],nova[TAMANHO];
    int i , j;
    printf("Digite uma palavra\n>");

    scanf("\n%[^\n]", palavra);
    j = 0;
    for(i = strlen(palavra) - 1; i >=0;i--){
       nova[j] = palavra[i];
    j++;
    }
    nova[j] = '\0'; //fechar a Palavra Nova
    printf("Palavra = %s\n",palavra);
    printf("Palavra Nova = %s\n",nova);
    return 0;
}
