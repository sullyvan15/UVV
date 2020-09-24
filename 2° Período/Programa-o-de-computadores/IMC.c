/* comando de entrada: SCANF
*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    float Massa, Altura, IMC ; //IMC = ÍNDICE DE MASSA CORPÓREA
    printf("Entre com a massa em quilogramas: ");
    scanf("%f", &Massa);
    printf("Entre com a altura em metros: ");
    scanf("%f", &Altura);
    IMC = Massa / (Altura * Altura);
    printf("Seu IMC: %.2f\n", IMC);
    return 0;
}
