contanegativo = 0
contageral = 0
contapositivo = 0
numPositivos = 0
numNegativos = 0
valor = 1

print('Digite 0 para sair do programa!' )
while (valor != 0):
    valor = float (input('Digite um mimero real: '))

    if (valor < 0):

        contanegativo += 1
        contageral += 1
    
    elif (valor > 0) :
        contapositivo += 1
        contageral += 1

    if (contageral != 0) :
        numPositivos = contapositivo / contageral * 100
        numNegativos = contanegativo / contageral * 100
        print(f'nPositives: {numPositivos} 8')
        print(f'Negatives: {numNegativos} :')

    else:
        print(f'Nenhum numero positivo e negativo lido. ')