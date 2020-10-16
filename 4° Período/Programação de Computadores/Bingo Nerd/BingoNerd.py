

# BIBLIOTECAS AQUI:
import random
import numpy
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.style as style
style.use('seaborn-poster')
import numpy as np


#--------------------------------------------------------------------------------------------------------------------------------------------------

style.use('seaborn-poster')
contador = 0
TAMANHO = 4
aleatorio = 0


# Determina os parâmetros para a criação da cada cartela
cartela1 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela2 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela3 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)


while True:
    print('\nBINGO HEXADECIMAL - MENU:')
    print('Opção 1: Criar/Exibir Cartela: ')
    print('Opção 2: Sortear/Exibir Pedra')
    print('Opção ?: ... desenvolvida pelo grupo')
    print('Opção 0: Sair do Programa')
    opcao = int(input('Qual a sua Opção: '))

    if opcao == 0:
        print('TCHAU!!! - BOA SORTE')
        break

    elif opcao != 1 and opcao != 2:
        print('Opcao Incorreta. Escolha de novo.')

    elif opcao == 1:
        while contador < 3:
            if contador == 0:

                input('\nDigite seu nome: ')

                # Aloca os números gerados automaticamente da condição (16, 159) em todas as linhas em cada coluna especificada da cartela 1
                cartela1[:, 0] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela1[:, 1] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela1[:, 2] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela1[:, 3] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))

                # Exibição dos números gerados em formato hexadecimal
                print([hex(x)[2:] for x in cartela1[:, 0]])
                print([hex(x)[2:] for x in cartela1[:, 1]])
                print([hex(x)[2:] for x in cartela1[:, 2]])
                print([hex(x)[2:] for x in cartela1[:, 3]])


            elif (contador == 1):
                input('\nDigite seu nome: ')

                # Aloca os números gerados automaticamente da condição (16, 159) em todas as linhas em cada coluna especificada da cartela 2
                cartela2[:, 0] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela2[:, 1] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela2[:, 2] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela2[:, 3] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))

                # Exibição dos números gerados em formato hexadecimal
                print([hex(x)[2:] for x in cartela2[:, 0]])
                print([hex(x)[2:] for x in cartela2[:, 1]])
                print([hex(x)[2:] for x in cartela2[:, 2]])
                print([hex(x)[2:] for x in cartela2[:, 3]])
            else:
                input('\nDigite seu nome: ')

                # Aloca os números gerados automaticamente da condição (16, 159) em todas as linhas em cada coluna especificada da cartela 1
                cartela3[:, 0] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela3[:, 1] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela3[:, 2] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
                cartela3[:, 3] = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))

                # Exibição dos números gerados em formato hexadecimal
                print([hex(x)[2:] for x in cartela3[:, 0]])
                print([hex(x)[2:] for x in cartela3[:, 1]])
                print([hex(x)[2:] for x in cartela3[:, 2]])
                print([hex(x)[2:] for x in cartela3[:, 3]])

            contador = contador + 1
# FUNÇÃO: Sortear uma (1) Pedra: RANDOM DECIMAL: [16, 159]
    elif (opcao == 2):
        aleatorio = np.array(random.sample(range(16, 159), TAMANHO)).reshape((TAMANHO))
        hex_aleatorio = ([hex(x)[2:] for x in aleatorio])
        print(f'-------- NUMERO SORTEADO: {hex_aleatorio}')



hexcartela10 = ([hex(x)[2:] for x in cartela1[:, 0]])
hexcartela11 = ([hex(x)[2:] for x in cartela1[:, 1]])
hexcartela12 = ([hex(x)[2:] for x in cartela1[:, 2]])
hexcartela13 = ([hex(x)[2:] for x in cartela1[:, 3]])
hexcartela20 = ([hex(x)[2:] for x in cartela2[:, 0]])
hexcartela21 = ([hex(x)[2:] for x in cartela2[:, 1]])
hexcartela22 = ([hex(x)[2:] for x in cartela2[:, 2]])
hexcartela23 = ([hex(x)[2:] for x in cartela2[:, 3]])
hexcartela30 = ([hex(x)[2:] for x in cartela3[:, 0]])
hexcartela31 = ([hex(x)[2:] for x in cartela3[:, 1]])
hexcartela32 = ([hex(x)[2:] for x in cartela3[:, 2]])
hexcartela33 = ([hex(x)[2:] for x in cartela3[:, 3]])




# --------------------------------------------- Metsplot -------------------------------------------------
rowlen = 4
fig = plt.figure()
ax = fig.gca()
ax.set_xticks(np.arange(0, rowlen + 1))
ax.set_yticks(np.arange(0, rowlen + 1))
plt.grid()


def Criartabela1():

    for i, word in enumerate(hexcartela10[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 3.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela11[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 2.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela12[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 1.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela13[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 0.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    plt.show()

def Criartabela2():

    for i, word in enumerate(hexcartela20[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 3.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela21[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 2.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela22[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 1.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela23[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 0.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    plt.show()

def Criartabela3():

    for i, word in enumerate(hexcartela30[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 3.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela31[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 2.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela32[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 1.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    for i, word in enumerate(hexcartela33[:rowlen ** 2]):
        x = (i % rowlen) + 0.4
        y = int(i / rowlen) + 0.5
        ax.annotate(word, xy=(x, y), xytext=(x, y))
    plt.show()

Criartabela1()
Criartabela2() #Adicionar em uma nova célula
Criartabela3() #Adicionar em uma nova célula

#-----------------------------------PANDA------------------------------------------------------------------

import pandas
pandaCartela1 = [hexcartela10, hexcartela11, hexcartela12, hexcartela13]
pandaCartela2 = [hexcartela20, hexcartela21, hexcartela22, hexcartela23]
pandaCartela3 = [hexcartela30, hexcartela31, hexcartela32, hexcartela33]

cartela1 = pandas.DataFrame(pandaCartela1,
                            index=['LINHA 1', 'LINHA 2', 'LINHA 3', 'LINHA 4'],
                            columns=['COLUNA A', 'COLUNA B', 'COLUNA C', 'COLUNA D'])
cartela2 = pandas.DataFrame(pandaCartela2,
                            index=['LINHA 1', 'LINHA 2', 'LINHA 3', 'LINHA 4'],
                            columns=['COLUNA A', 'COLUNA B', 'COLUNA C', 'COLUNA D'])
cartela3 = pandas.DataFrame(pandaCartela3,
                            index=['LINHA 1', 'LINHA 2', 'LINHA 3', 'LINHA 4'],
                            columns=['COLUNA A', 'COLUNA B', 'COLUNA C', 'COLUNA D'])


cartela1
cartela2 #Adicionar em uma nova célula
cartela3 #Adicionar em uma nova célula