#include <stdio.h>
#include <stdlib.h>

//////////// 1 A

#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 6

int main()
{
    int Vetor[TAMANHO] = {10, 8, 6, 4, 2, 0};
    int Trocou;
    int i, Ls, Auxiliar;



    for (i = 0; i < TAMANHO; i++)
        printf(" %i ", Vetor[i]);
    printf("]\n\n");

   /
    Ls = TAMANHO - 1;
    {
        Trocou = 0;
        for (i = 0; i < Ls; i++)
        {
            if (Vetor[i] > Vetor[i + 1])
            {
                Auxiliar = Vetor[i];
                Vetor[i] = Vetor[i + 1];
                Vetor[i + 1] = Auxiliar;
                Trocou = 1;
            }
        }
        Ls = Ls - 1;
    }while(Trocou);



    printf("Vetor ordenado: [");
    for (i = 0; i < TAMANHO; i++)
        printf(" %i ", Vetor[i]);
    printf("]\n");
    return 0;
}

//////////// 1 B


#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10

int main()
{
    int Vetor[TAMANHO] = {0, 2, 4, 6, 10, 8, 10, 20, 18, 16};
    int Trocou;
    int i, Ls, Auxiliar;



    for (i = 0; i < TAMANHO; i++)
        printf(" %i ", Vetor[i]);
    printf("]\n\n");

   /
    Ls = TAMANHO - 1;
    {
        Trocou = 0;
        for (i = 0; i < Ls; i++)
        {
            if (Vetor[i] > Vetor[i + 1])
            {
                Auxiliar = Vetor[i];
                Vetor[i] = Vetor[i + 1];
                Vetor[i + 1] = Auxiliar;
                Trocou = 1;
            }
        }
        Ls = Ls - 1;
    }while(Trocou);



    printf("Vetor ordenado: [");
    for (i = 0; i < TAMANHO; i++)
        printf(" %i ", Vetor[i]);
    printf("]\n");
    return 0;
}

//////////// 1 C

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define TAMANHO 4


int main()
{
    char Vetor[TAMANHO] = {'R', 'O', 'M', 'A'};
    int Trocou;
    int i, Ls, Auxiliar;



    for (i = 0; i < TAMANHO; i++)
        printf(" %i ", Vetor[i]);
    printf("]\n\n");

   /
    Ls = TAMANHO - 1;
    {
        Trocou = 0;
        for (i = 0; i < Ls; i++)
        {
            if (Vetor[i] > Vetor[i + 1])
            {
                Auxiliar = Vetor[i];
                Vetor[i] = Vetor[i + 1];
                Vetor[i + 1] = Auxiliar;
                Trocou = 1;
            }
        }
        Ls = Ls - 1;
    }while(Trocou);



    printf("Vetor ordenado: [");
    for (i = 0; i < TAMANHO; i++)
        printf(" %i ", Vetor[i]);
    printf("]\n");
    return 0;
}

//////////// 2 A
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10
int main()
{

    int Vetor[TAMANHO] = {0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
    int Procurado;
    int Saida = -1;
    int Li = 0;
    int Ls = TAMANHO - 1;
    int Meio;
    printf("Digite o valor procurado: ");
    scanf("%i", &Procurado);

    while(Li <= Ls && Saida == -1)
    {
        Meio = (Li + Ls) / 2;
        if(Vetor[Meio] == Procurado)
            Saida = Meio;
        else if(Vetor[Meio] > Procurado)
            Ls = Meio - 1;
        else
            Li = Meio + 1;
    }
    if (Saida == -1)
        printf("Valor procurado: %i nao foi encontrado.\n\n", Procurado);
    else
        printf("Valor procurado: %i encontrado no Indice: %i.\n\n", Vetor[Saida], Saida);
    return 0;
}




//////////// 2 B
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10
int main()
{

    int Vetor[TAMANHO] = {0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
    int Procurado;
    int Saida = -1;
    int Li = 0;
    int Ls = TAMANHO - 1;
    int Meio;
    printf("Digite o valor procurado: ");
    scanf("%i", &Procurado);

    while(Li <= Ls && Saida == -1)
    {
        Meio = (Li + Ls) / 2;
        if(Vetor[Meio] == Procurado)
            Saida = Meio;
        else if(Vetor[Meio] > Procurado)
            Ls = Meio - 1;
        else
            Li = Meio + 1;
    }
    if (Saida == -1)
        printf("Valor procurado: %i nao foi encontrado.\n\n", Procurado);
    else
        printf("Valor procurado: %i encontrado no Indice: %i.\n\n", Vetor[Saida], Saida);
    return 0;
}


//////////// 2 C
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10
int main()
{

    int Vetor[TAMANHO] = {0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
    int Procurado;
    int Saida = -1;
    int Li = 0;
    int Ls = TAMANHO - 1;
    int Meio;
    printf("Digite o valor procurado: ");
    scanf("%i", &Procurado);

    while(Li <= Ls && Saida == -1)
    {
        Meio = (Li + Ls) / 2;
        if(Vetor[Meio] == Procurado)
            Saida = Meio;
        else if(Vetor[Meio] > Procurado)
            Ls = Meio - 1;
        else
            Li = Meio + 1;
    }
    if (Saida == -1)
        printf("Valor procurado: %i nao foi encontrado.\n\n", Procurado);
    else
        printf("Valor procurado: %i encontrado no Indice: %i.\n\n", Vetor[Saida], Saida);
    return 0;
}


//////////// 3 A
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO 10

int main()
{
    int Vetor[TAMANHO]; //Vetor de exemplo
    int Trocou;
    int i, Ls, Auxiliar;
    printf("Vetor original: [");
    scanf("%i", Vetor);

    /* Exibe o vetor original */
    for (i = 0; i < TAMANHO; i++)
        printf(" %i ", Vetor[i]);
    printf("]\n\n");

    /* MÉTODO BOLHA */
    Ls = TAMANHO - 1;  // Ls: Limite do Índice Superior do Vetor.
    do
    {
        Trocou = 0;    // Verifica se existem termos fora de ordem.
        for (i = 0; i < Ls; i++)
        {
            if (Vetor[i] % 2 == 0
            {
                Auxiliar = Vetor[i];
                Vetor[i] = Vetor[i + 1];
                Vetor[i + 1] = Auxiliar;
                Trocou = 1; //Ainda há elementos trocados no vetor.
            }
        }
        Ls = Ls - 1;         // Reduz uma posição do vetor: última.
    }while(Trocou);
    /* FIM DO MÉTODO BOLHA */

    /* Exibe o vetor ordenado: Ordem ascendente */
    printf("Vetor ordenado: [");
    for (i = 0; i < TAMANHO; i++)
        printf(" %i ", Vetor[i]);
    printf("]\n");
    return 0;
}



//////////// 1 C



//////////// 1 C


//////////// 1 C


//////////// 1 C


//////////// 1 C


//////////// 1 C

//////////// 1 C
