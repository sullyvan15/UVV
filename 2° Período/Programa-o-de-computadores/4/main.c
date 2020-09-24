#include <stdio.h>
#include <stdlib.h>

int main()
{
    char palavra[T], nova[T];
    INT I, J, N_LETRAS;
    printf("Palavra: "); scanf("\n%[^\n]", palavra);
    printf("Numero de letras para inverter entre [2, %i]: ", strlen(palavra));
    scanf("%i", &N_LETRAS);
    if(N_LETRAS < 2 || N_LETRAS > strlen(palavra))
        printf("Erro \n");
    else
    {
        strcpy(Nova, Palavra);
        j = 0;
        for(i = N_LETRAS - 1; i >=0; i--)
        {

        }
    }
    return 0;
}
