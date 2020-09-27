contanegativo = 0
contageral = 0
contapositivo = 0
numPositivos = 0
numNegativos = 0
valor = 1

while valor != 0:
    valor = float(input('Digite um número real ou O para sair do programa: '))
    if valor < 0 or valor > 0:  # Para excluir o 0 dos valores lidos
        contageral += 1
        if valor % 2 == 0:
            contapositivo += 1
        else:
            contanegativo += 1
    if contageral != 0:
        numPositivos = contapositivo / contageral * 100
        numNegativos = contanegativo / contageral * 100

    else:
        print(f'Nenhum numero positivo e negativo lido. ')

print(f'números postivos: {numPositivos: .1f} %')
print(f'números negativos: {numNegativos: .1f} %')
