import math

numero = int(input('Insira um número positivo: '))
quadrado = math.pow(numero, 2)


# inserir condição de verificar se o número é inserido
if numero > 0:
        if numero % 2 == 0 and quadrado % 11 == 0:
                print(f'{quadrado: .0f} \n O quadrado de {numero} é múltiplo de 11')
        else:
                print(f'{quadrado: .0f} \n O quadrado de {numero} NÃO É múltiplo de 11')
else:
        print("Insira um número positivo caraio")




