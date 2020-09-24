#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define CAMPO 100
#define T 10

FILE *Arquivo47;
FILE *ArquivoOrdenado;


typedef struct Revezamento
{
        char lider[CAMPO];
        char Equipe[CAMPO];
        int Fundacao;
        int Pontuacao;
        float tempo;

} REVEZAMENTO;


void Carregar(struct Revezamento vetor[T]);
void Exibir(REVEZAMENTO vetor[T]);
void Ordenar(struct Revezamento vetor[T]);
int Pesquisar_Campo(struct Revezamento vetor[T], int pesquisa);
void Salvar_Ordenado(struct Revezamento vetor[T]);


int main()
{
    struct Revezamento vetor[T];
    int opc;
    int pesquisa;
    int Saida;

    do
    {


        printf("1- Exibir cadastros                           \n");
        printf("2- Ordenar campos                             \n");
        printf("3- Pesquisar                                  \n");
        printf("4- Salvar dados ordenados                     \n");
        printf("0- Sair do programa.                          \n");

        printf("Opcao Selecionada: ");
        scanf("%i", &opc);

        if(opc == 1)
        {
            Carregar(vetor);
            Exibir(vetor);
        }

        else if (opc == 2)
        {
            Ordenar(vetor);
        }

        else if (opc == 3)
        {
            printf("Digite a data de Fundacao que deseja pesquisar: ");
            scanf("%i", &pesquisa);
            Saida == Pesquisar_Campo(vetor, pesquisa);
            if(Saida == -1)
                printf("Fundacao %i nao foi encontrado \n", pesquisa);
            else
                printf("Fundacao: %i encontrado \n", pesquisa);

        }

        else if (opc == 4)
        {
            Salvar_Ordenado(vetor);
        }

         else if (opc == 0)
        {

            printf("\n\nFinalizando o programa...\n\n");
        }

        else
            printf("\n\nEscolha a opcao novamente\n\n");

    } while(opc);

    return 0;
}
///////////////////////////////////////Opcao 1, 2, 3 (MAIN) Carregar arquivo //////////////////////////////////////////////////
void Carregar(struct Revezamento vetor[T])
{
    int i = 0;
    char C;
    int Quant = 0;
    int Campo = 1;
    char Aux[CAMPO];


    Arquivo47 = fopen("Arquivo47.txt", "r");
    if(Arquivo47 == 0)
    {
        printf("\nERRO NA ABERTURA DO ARQUIVO\n");
        fclose(Arquivo47);
    }

    else
    {
        i = 0; Quant = 0; Campo = 1;
        do
        {

            C = getc(Arquivo47);
            if (C != '\n' && C != EOF)
            {

                Aux[i] = C;
                i++;
                }
            else
            {

                Aux[i] = '\0';

                switch (Campo)
                {
                    case 1:
                        strcpy(vetor[Quant].lider, Aux);
                        break;
                    case 2:
                        strcpy(vetor[Quant].Equipe, Aux);
                        break;
                    case 3:
                        vetor[Quant].Fundacao = atoi(Aux);
                        break;
                    case 4:
                        vetor[Quant].Pontuacao = atoi(Aux);
                        break;
                    case 5:
                        vetor[Quant].tempo = atoi(Aux);

                        Campo = 0;
                        Quant++;
                    }
                    Campo++;
                    i = 0;
            }

        }while (C != EOF);

        fclose(Arquivo47);
    }
}
///////////////////////////////////////Opcao 1 (MAIN) Exibir arquivo //////////////////////////////////////////////////
void Exibir(REVEZAMENTO vetor[T])
{


    int i;
    for (i = 0; i < T; i++)
    {
        printf("Jogador %i:       \n", i + 1);
        printf("\t  lider:      %s\n", vetor[i].lider);
        printf("\t  Equipe:     %s\n", vetor[i].Equipe);
        printf("\t  Fundacao:   %i\n", vetor[i].Fundacao);
        printf("\t  Pontuacao:  %i\n", vetor[i].Pontuacao);
        printf("\t  Tempo:      %.2f\n", vetor[i].tempo);
    }
}
///////////////////////////////////////Opcao 2 (MAIN) Método bolha //////////////////////////////////////////////////
void Ordenar(struct Revezamento vetor[T])
{

    struct Revezamento Auxiliar;
    int Trocou;
    int i, Ls = T - 1;
    Carregar(vetor);

    do
    {
        Trocou = 0;
        for( i = 0; i < Ls; i++)
        {
            if(vetor[i].Pontuacao < vetor[i + 1].Pontuacao)
            {
                Auxiliar = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = Auxiliar;
                Trocou = 1;
            }
        }

        Ls = Ls - 1;
    }while(Trocou);

    printf("\nOrdenado por Pontuacao (Da maior para menor):\n");
    for(i = 0; i < T; i++)
    {
        printf("Jogador %i:             \n", i + 1);
        printf("\t  lider:            %s\n", vetor[i].lider);
        printf("\t  Equipe:           %s\n", vetor[i].Equipe);
        printf("\t  Fundacao:         %i\n", vetor[i].Fundacao);
        printf("\t  pontuacao:        %i\n", vetor[i].Pontuacao);
        printf("\t  tempo:          %.2f\n", vetor[i].tempo);
    }
}

///////////////////////////////////////Opcao 3 (MAIN) Pesquisa binária //////////////////////////////////////////////////
int Pesquisar_Campo(struct Revezamento vetor[T], int pesquisa)
{
    struct Revezamento Auxiliar;
    int Trocou;
    int i, Ls = T - 1;
    Carregar(vetor);

    do
    {
        Trocou = 0;
        for( i = 0; i < Ls; i++)
        {
            if(vetor[i].Fundacao > vetor[i + 1].Fundacao)
            {
                Auxiliar = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = Auxiliar;
                Trocou = 1;
            }
        }

        Ls = Ls - 1;
    }while(Trocou);

    int Saida = -1;
    int Li = 0;
    int Meio;

    while(Li <= Ls && Saida == -1)
    {
        Meio = (Li + Ls) / 2;

        if((vetor[Meio].Fundacao) == pesquisa)
            Saida = vetor[Meio].Fundacao;

        else if (vetor[Meio].Fundacao > pesquisa)
            Ls = vetor[Meio].Fundacao - 1;
        else
            Li = vetor[Meio].Fundacao + 1;
    }

    return Saida;

}

///////////////////////////////////////Opcao 4 (MAIN) Arquivo Ordenado //////////////////////////////////////////////////
void Salvar_Ordenado(struct Revezamento vetor[T])
{
    Ordenar(vetor);
    ArquivoOrdenado = fopen("ArquivoOrdenado.txt", "w");

    int i;
    for (i = 0; i < T; i++)
    {
        fprintf(ArquivoOrdenado,"Jogador %i:\n", i + 1);
        fprintf(ArquivoOrdenado,"\t  lider:     %s\n", vetor[i].lider);
        fprintf(ArquivoOrdenado,"\t  Equipe:    %s\n", vetor[i].Equipe);
        fprintf(ArquivoOrdenado,"\t  Fundacao:  %i\n", vetor[i].Fundacao);
        fprintf(ArquivoOrdenado,"\t  pontuacao: %i\n", vetor[i].Pontuacao);
        fprintf(ArquivoOrdenado,"\t  tempo :    %i\n", vetor[i].tempo);
    }

    fclose(ArquivoOrdenado);
}


