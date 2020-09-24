#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define CAMPO 100
#define MERCADOS 10

FILE *Arquivo13; //Arquivo de texto
FILE *ArquivoOrdenado;

/*Registro de Supermercados */
typedef struct Registro_Supermercados
{
        char Loja[CAMPO];
        char Bairro[CAMPO];
        int CEP;
        int VendasTotal;
        int CodigoLoja;

} SUPERMERCADOS;

/*Modularizações*/
void Carregar_Mercados(struct Registro_Supermercados vetor_mercado[MERCADOS]);
void Exibir_Mercados(SUPERMERCADOS vetor_mercado[MERCADOS]);
void Ordenar_Mercados(struct Registro_Supermercados vetor_mercado[MERCADOS]);
int Pesquisar_Campo(struct Registro_Supermercados vetor_mercado[MERCADOS], int valor_pesquisa);
void Salvar_Ordenado(struct Registro_Supermercados vetor_mercado[MERCADOS]);


int main()
{
    struct Registro_Supermercados vetor_mercado[MERCADOS];
    int opc;
    int valor_pesquisa;
    int Saida;

    do
    {
        printf("\n               MENU\n\n");
        printf(" -----------------------------------------------\n");
        printf("|1- Exibir cadastros dos Mercados              |\n");
        printf("|2- Ordenar campos!                            |\n");
        printf("|3- Pesquisa de informacao sobre Supermercado: |\n");
        printf("|4- Salvar dados ordenados.                    |\n");
        printf("|0- Sair do programa.                          |\n");
        printf(" -----------------------------------------------\n");
        printf("Opcao Selecionada: "); scanf("%i", &opc);

        if(opc == 1)
        {
            Carregar_Mercados(vetor_mercado);
            Exibir_Mercados(vetor_mercado);
        }

        else if (opc == 2)
        {
            Ordenar_Mercados(vetor_mercado);
        }

        else if (opc == 3)
        {
            printf("Digite o CEP que deseja pesquisar: "); scanf("%i", &valor_pesquisa);
            Saida == Pesquisar_Campo(vetor_mercado, valor_pesquisa);
            if(Saida == -1)
                printf("CEP %i nao foi encontrado", valor_pesquisa);
            else
                printf("CEP: %i encontrado", valor_pesquisa);

        }

        else if (opc == 4)
        {
            Salvar_Ordenado(vetor_mercado);
        }

         else if (opc == 0)
        {
            system("cls");
            printf("\n\nFIM DO PROGRAMA!!!!!\n\n");
        }

        else
            printf("\n\nESCOLHA A OPCAO NOVAMENTE!\n\n");

    } while(opc);

    return 0;
}

void Carregar_Mercados(struct Registro_Supermercados vetor_mercado[MERCADOS])
{
    int i = 0; //aux de contagem
    char C; // aux contando um a um do arquivo
    int Quant = 0; // registros
    int Campo = 1; // acessa os campos do registro: vetor ficha
    char Aux[CAMPO]; //monta as lindas do arquivo
    //FILE *Arquivo13;

    Arquivo13 = fopen("Arquivo13.txt", "r");
    if(Arquivo13 == 0)
    {
        printf("\nERRO NA ABERTURA DO ARQUIVO\n");
        fclose(Arquivo13);
    }

    else
    {
        i = 0; Quant = 0; Campo = 1;
        do
        {
            /* Ler caractere por caractere do arquivo */
            C = getc(Arquivo13);
            if (C != '\n' && C != EOF)
            {
                /* Monta um vetor (Aux) com os caracteres da linha */
                /* Monta linha por linha do arquivo */
                Aux[i] = C;
                i++;
                }
            else
            {
                /* Monta o vetor Ficha: Campo por Campo */
                Aux[i] = '\0'; //Finaliza a linha (String)
                /* Salva a linha no Registro no seu Respectivo Campo */
                switch (Campo)
                {
                    case 1:
                        strcpy(vetor_mercado[Quant].Loja, Aux);
                        break;
                    case 2:
                        strcpy(vetor_mercado[Quant].Bairro, Aux);
                        break;
                    case 3:
                        vetor_mercado[Quant].CEP = atoi(Aux);
                        break;
                    case 4:
                        vetor_mercado[Quant].VendasTotal = atoi(Aux);
                        break;
                    case 5:
                        vetor_mercado[Quant].CodigoLoja = atoi(Aux);

                        Campo = 0; //Reinicia para o próximo registro
                        Quant++;   //Incrementa 1 para o próximo registro
                    }
                    Campo++; //Próximo Campo
                    i = 0;   //Reinicia o Indice do vetor auxiliar (Aux)
            }
                /* Enquanto: Caractere (C) for diferente do 'End Of File' (EOF)*/
        }while (C != EOF);
        /* Fechar o arquivo (FILE) */
        fclose(Arquivo13);
    }
}

void Exibir_Mercados(SUPERMERCADOS vetor_mercado[MERCADOS])
{
    //Carregar_Mercados(SUPERMERCADOS);
    /* Exibe os dados do Arquivo (Registros: SUPERMERCADOS) */
    int i;
    for (i = 0; i < MERCADOS; i++)
    {
        printf("Supermercado %i    :\n", i + 1);
        printf("\t  Loja           : %s\n", vetor_mercado[i].Loja);
        printf("\t  Bairro         : %s\n", vetor_mercado[i].Bairro);
        printf("\t  CEP            : %i\n", vetor_mercado[i].CEP);
        printf("\t  Total de Vendas: %i\n", vetor_mercado[i].VendasTotal);
        printf("\t  Codigo da Loja : %i\n", vetor_mercado[i].CodigoLoja);
    }
}

void Ordenar_Mercados(struct Registro_Supermercados vetor_mercado[MERCADOS])
{

    struct Registro_Supermercados Auxiliar; // Troca os campos ao mesmo tempo
    int Trocou; // verifica se há vetores fora de ordem
    int i, Ls = MERCADOS - 1;
    Carregar_Mercados(vetor_mercado);

    do
    {
        Trocou = 0;
        for( i = 0; i < Ls; i++)
        {
            if(vetor_mercado[i].CEP > vetor_mercado[i + 1].CEP)
            {
                Auxiliar = vetor_mercado[i];
                vetor_mercado[i] = vetor_mercado[i + 1];
                vetor_mercado[i + 1] = Auxiliar;
                Trocou = 1; // Sinaliza que ainda há elementos trocados no vetor
            }
        }

        Ls = Ls - 1; // Tira os elementos que já estão ordenados
    }while(Trocou);

    printf("\nOrdenado por CEP\n");
    for(i = 0; i < MERCADOS; i++)
    {
        printf("Supermercado %i    :\n", i + 1);
        printf("\t  Loja           : %s\n", vetor_mercado[i].Loja);
        printf("\t  Bairro         : %s\n", vetor_mercado[i].Bairro);
        printf("\t  CEP            : %i\n", vetor_mercado[i].CEP);
        printf("\t  Total de Vendas: %i\n", vetor_mercado[i].VendasTotal);
        printf("\t  Codigo da Loja : %i\n", vetor_mercado[i].CodigoLoja);
    }
}

int Pesquisar_Campo(struct Registro_Supermercados vetor_mercado[MERCADOS], int valor_pesquisa)
{
    struct Registro_Supermercados Auxiliar; // Troca os campos ao mesmo tempo
    int Trocou; // verifica se há vetores fora de ordem
    int i, Ls = MERCADOS - 1;
    Carregar_Mercados(vetor_mercado);

    do
    {
        Trocou = 0;
        for( i = 0; i < Ls; i++)
        {
            if(vetor_mercado[i].CEP > vetor_mercado[i + 1].CEP)
            {
                Auxiliar = vetor_mercado[i];
                vetor_mercado[i] = vetor_mercado[i + 1];
                vetor_mercado[i + 1] = Auxiliar;
                Trocou = 1; // Sinaliza que ainda há elementos trocados no vetor
            }
        }

        Ls = Ls - 1; // Tira os elementos que já estão ordenados
    }while(Trocou);

    int Saida = -1;             // Índice para elemento NÃO encontrado.
    int Li = 0;                 // Li: Limite Inferior do Vetor.
    int Meio;                   // Índice da metade do vetor.

    while(Li <= Ls && Saida == -1)
    {
        Meio = (Li + Ls) / 2;

        if((vetor_mercado[Meio].CEP) == valor_pesquisa)
            Saida = vetor_mercado[Meio].CEP;

        else if (vetor_mercado[Meio].CEP > valor_pesquisa)
            Ls = vetor_mercado[Meio].CEP - 1;
        else
            Li = vetor_mercado[Meio].CEP + 1;
    }

    return Saida;

}

void Salvar_Ordenado(struct Registro_Supermercados vetor_mercado[MERCADOS])
{
    Ordenar_Mercados(vetor_mercado);
    ArquivoOrdenado = fopen("ArquivoOrdenado.txt", "w");

    int i;
    for (i = 0; i < MERCADOS; i++)
    {
        fprintf(ArquivoOrdenado,"Supermercado %i    :\n", i + 1);
        fprintf(ArquivoOrdenado,"\t  Loja           : %s\n", vetor_mercado[i].Loja);
        fprintf(ArquivoOrdenado,"\t  Bairro         : %s\n", vetor_mercado[i].Bairro);
        fprintf(ArquivoOrdenado,"\t  CEP            : %i\n", vetor_mercado[i].CEP);
        fprintf(ArquivoOrdenado,"\t  Total de Vendas: %i\n", vetor_mercado[i].VendasTotal);
        fprintf(ArquivoOrdenado,"\t  Codigo da Loja : %i\n", vetor_mercado[i].CodigoLoja);
    }

    fclose(ArquivoOrdenado);
}


