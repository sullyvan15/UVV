# BIBLIOTECAS AQUI:
import random
import numpy
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.style as style


style.use('seaborn-poster')
import numpy as np

# FUNÇÃO: Criar Cartela (4 x 4)
import random

contador = 0
TAMANHO = 4
TAMANHO = 4
cartela1 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela2 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela3 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)

def CriarCartela1():
    cartela1[:, 0] = random.sample(range(16, 159), TAMANHO)
    cartela1[:, 1] = random.sample(range(16, 159), TAMANHO)
    cartela1[:, 2] = random.sample(range(16, 159), TAMANHO)
    cartela1[:, 3] = random.sample(range(16, 159), TAMANHO)


def CriarCartela2():
    cartela2[:, 0] = random.sample(range(16, 159), TAMANHO)
    cartela2[:, 1] = random.sample(range(16, 159), TAMANHO)
    cartela2[:, 2] = random.sample(range(16, 159), TAMANHO)
    cartela2[:, 3] = random.sample(range(16, 159), TAMANHO)


def CriarCartela3():
    cartela3[:, 0] = random.sample(range(16, 159), TAMANHO)
    cartela3[:, 1] = random.sample(range(16, 159), TAMANHO)
    cartela3[:, 2] = random.sample(range(16, 159), TAMANHO)
    cartela3[:, 3] = random.sample(range(16, 159), TAMANHO)


# FUNÇÃO: Conversão Decimal-Hexadecimal ()
def CartelaHex1():

    hexcartela10 = ([hex(x)[2:] for x in cartela1[:, 0]])
    hexcartela11 = ([hex(x)[2:] for x in cartela1[:, 1]])
    hexcartela12 = ([hex(x)[2:] for x in cartela1[:, 2]])
    hexcartela13 = ([hex(x)[2:] for x in cartela1[:, 3]])
def CartelaHex2():
    hexcartela20 = ([hex(x)[2:] for x in cartela2[:, 0]])
    hexcartela21 = ([hex(x)[2:] for x in cartela2[:, 1]])
    hexcartela22 = ([hex(x)[2:] for x in cartela2[:, 2]])
    hexcartela23 = ([hex(x)[2:] for x in cartela2[:, 3]])
def CartelaHex3():
    hexcartela30 = ([hex(x)[2:] for x in cartela3[:, 0]])
    hexcartela31 = ([hex(x)[2:] for x in cartela3[:, 1]])
    hexcartela32 = ([hex(x)[2:] for x in cartela3[:, 2]])
    hexcartela33 = ([hex(x)[2:] for x in cartela3[:, 3]])

    # FUNÇÃO: Sortear uma (1) Pedra: RANDOM DECIMAL: [16, 159]


def sortearpedra():

    aleatorio = random.sample(range(16, 159), 1)
    hex_aleatorio = ([hex(x)[2:] for x in aleatorio])
    print(f'-------- NUMERO SORTEADO: {hex_aleatorio}')

# FUNÇÃO: Conferir Pedra

# FUNÇÃO: Exibir Cartela Hexadecimal: 4 x 4


def printCartela1():

    print(f'{CartelaHex1.hexcartela10} \n{CartelaHex1.hexcartela11} \n{CartelaHex1.hexcartela12} \n{CartelaHex1.hexcartela13}')

def printCartela2():
    print(f'{CartelaHex2.hexcartela20} \n{CartelaHex2.hexcartela21} \n{CartelaHex2.hexcartela22} \n{CartelaHex2.hexcartela23}')


def printCartela3():
    print(f'{CartelaHex3.hexcartela30} \n{CartelaHex3.hexcartela31} \n{CartelaHex3.hexcartela32} \n{CartelaHex3.hexcartela33}')


printCartela1
print(f'\n')
printCartela2
print(f'\n')
printCartela3


# FUNÇÃO: Exibir Pontuação

# FUNÇÃO: Exibir Vencedor/Premiação

# FUNÇÃO: Criar interface da cartela
def InterfaceCartela():
    contador = 0


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

                    CriarCartela1()
                    CartelaHex1()
                    printCartela1()


                elif (contador == 1):
                    input('\nDigite seu nome: ')

                    CriarCartela2()
                    CartelaHex2()
                    printCartela2()

                else:
                    input('\nDigite seu nome: ')

                    CriarCartela3()
                    CartelaHex3()
                    printCartela3()

                contador = contador + 1

        elif (opcao == 2):
            sortearpedra()


InterfaceCartela()

