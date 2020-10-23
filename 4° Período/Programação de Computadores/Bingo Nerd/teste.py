# BIBLIOTECAS AQUI:
import random
import pandas
import numpy
import matplotlib.pyplot as plt
import matplotlib.style as style
import numpy as np
import random

style.use('seaborn-poster')

"""
FUNÇÃO: Criar Cartela (4 x 4), com a seguintes características:
1: Números Aleatórios: Intervalo entre [16, 159];
2: Criar em Decimal (Base 10: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9)
3: NÃO pode ter NÚMEROS REPETIDOS na cartela. Caso seja sorteado um número repetido,
o sorteio deve ser refeito até sair um número que ainda não foi sorteado na partida.
3: PARÂMETRO NOMINAL: Inserir (de forma OPCIONAL) o Nome do Jogador na Cartela.
"""
def sortearSemRepeticao(INICIO=16, FIM=159, TAMANHO=4):
    # Criar uma função que crie um conjunto de dados (dataset), sem valores repetidos !!!
    # Inserir no dataset, somente números não repetidos dentro do intervalo [INICIO, FIM]
    _dataset = numpy.zeros(TAMANHO, dtype=int)
    numero = numpy.random.randint(INICIO, FIM, 1)  # Sortear um por um.
    _dataset[0] = numero
    # Qual a lógica???
    l = 1  # l: Linha
    while (l < TAMANHO):
        numero = numpy.random.randint(INICIO, FIM, 1)  # APENAS ESTA VEZ
        c = l - 1  # c: Coluna
        # variável lógica que verifica se o número já foi sorteado, se SIM: BREAK.
        haRepetidos = False  # não
        while c != -1:
            if _dataset[c] == numero:
                haRepetidos = True  # sim
                break
            c -= 1
        if not haRepetidos:
            _dataset[l] = numero
            l += 1
    return _dataset

TAMANHO = 4

cartela1 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela2 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela3 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)


def CriarCartela1():
    NomeJogador1 = input('\nDigite seu nome (Opcional): ')

    cartela1[:, 0] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela1[:, 1] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela1[:, 2] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela1[:, 3] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    return cartela1


def CriarCartela2():
    NomeJogador2 = input('\nDigite seu nome (Opcional): ')
    cartela2[:, 0] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela2[:, 1] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela2[:, 2] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela2[:, 3] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    return cartela2


def CriarCartela3():
    NomeJogador3 = input('\nDigite seu nome (Opcional): ')
    cartela3[:, 0] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela3[:, 1] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela3[:, 2] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    cartela3[:, 3] = np.array(sortearSemRepeticao(16, 159, TAMANHO)).reshape(TAMANHO)
    return cartela3


CriarCartela2()

# FUNÇÃO: Conversão Decimal-Hexadecimal ()
global hexcartela10
global hexcartela11
global hexcartela12
global hexcartela13
global hexcartela20
global hexcartela21
global hexcartela22
global hexcartela23
global hexcartela30
global hexcartela31
global hexcartela32
global hexcartela33


def HexCartela1(cartela1):
    hexcartela10 = np.array([hex(x)[2:] for x in cartela1[:, 0]])
    hexcartela11 = np.array([hex(x)[2:] for x in cartela1[:, 1]])
    hexcartela12 = np.array([hex(x)[2:] for x in cartela1[:, 2]])
    hexcartela13 = np.array([hex(x)[2:] for x in cartela1[:, 3]])
    return hexcartela20, hexcartela21, hexcartela22, hexcartela23


def HexCartela2(cartela2):
    hexcartela20 = np.array([hex(x)[2:] for x in cartela2[:, 0]])
    hexcartela21 = np.array([hex(x)[2:] for x in cartela2[:, 1]])
    hexcartela22 = np.array([hex(x)[2:] for x in cartela2[:, 2]])
    hexcartela23 = np.array([hex(x)[2:] for x in cartela2[:, 3]])
    return hexcartela20, hexcartela21, hexcartela22, hexcartela23


def HexCartela3(cartela3):
    hexcartela30 = np.array([hex(x)[2:] for x in cartela3[:, 0]])
    hexcartela31 = np.array([hex(x)[2:] for x in cartela3[:, 1]])
    hexcartela32 = np.array([hex(x)[2:] for x in cartela3[:, 2]])
    hexcartela33 = np.array([hex(x)[2:] for x in cartela3[:, 3]])
    return hexcartela30, hexcartela31, hexcartela32, hexcartela33


CartelaTotal1 = [hexcartela10, hexcartela11, hexcartela12, hexcartela13]
CartelaTotal2 = [hexcartela20, hexcartela21, hexcartela22, hexcartela23]
CartelaTotal3 = [hexcartela30, hexcartela31, hexcartela32, hexcartela33]


# FUNÇÃO: Sortear uma (1) Pedra: RANDOM DECIMAL: [16, 159]

def SortearPedra():
    aleatorio = np.array(random.sample(range(16, 159), 1)).reshape(1)
    hex_aleatorio = ([hex(x)[2:] for x in aleatorio])
    print(f'-------- NUMERO SORTEADO: {hex_aleatorio}')
    return aleatorio


# FUNÇÃO: Conferir Pedra
global pontosJogador1
global pontosJogador2
global pontosJogador3
global vitoriasJogador1
global vitoriasJogador2
global vitoriasJogador3


def checarosnumeros():
    opcao = 0
    pedras = []
    streak = 0
    pontosJogador1 = 0
    pontosJogador2 = 0
    pontosJogador3 = 0
    vitoriasJogador1 = 0
    vitoriasJogador2 = 0
    vitoriasJogador3 = 0

    Numeroatual = SortearPedra()
    while (Numeroatual in pedras):
        Numeroatual = aleatorio  # valor unico
        pedras.append(Numeroatual)

    if (Numeroatual in cartela1):
        # checa se os numeros estão na cartela
        print(f'O numero está no cartão 1!')
        streak = +1  # faz a pontuação
        pontosJogador1 == (pontosJogador1 + 100) - streak
        vitoriasJogador1 += 1
    elif (Numeroatual in cartela2):
        # checa se os numeros estão na cartela
        print(f'O numero está na cartela 2!')
        streak = +1  # faz a pontuação
        pontosJogador2 == (pontosJogador3 + 100) - streak
        vitoriasJogador2 += 1
    elif (Numeroatual in cartela3):
        streak = +1  # faz a pontuação
        pontosJogador3 == (pontosJogador3 + 100) - streak
        vitoriasJogador3 += 1
        # checa se os numeros estão na cartela
        print(f'O numero está na cartela 3!')


    else:

        print(f'O numero não está em nenhuma cartela')

    if vitoriasJogador1 or vitoriasJogador2 or vitoriasJogador3 == 16:
        fimDeJogo()

    return pontosJogador1, pontosJogador2, pontosJogador3, vitoriasJogador1, vitoriasJogador2, vitoriasJogador3


# FUNÇÃO: Exibir Cartela Hexadecimal: 4 x 4

def PrintCartela1():
    print(f'{hexcartela10} \n{hexcartela11} \n{hexcartela12} \n{hexcartela13}')


def PrintCartela2():
    print(f'{hexcartela20} \n{hexcartela21} \n{hexcartela22} \n{hexcartela23}')


def PrintCartela3():
    print(f'{hexcartela30} \n{hexcartela31} \n{hexcartela32} \n{hexcartela33}')


# FUNÇÃO: Exibir Vencedor/Premiação
# Premiação: R$ 100 - Cada pedra sorteada antes do Vencedor + R$ Maior Número (Decimal) da Cartela.
def fimDeJogo():
    if vitoriasJogador1 == 16:
        print(f'BINGO! Parabéns Jogador 1, seu prêmio é de R$ {pontosJogador1 + cartela1.max()}.')
    elif vitoriasJogador2 == 16:
        print(f'BINGO! Parabéns Jogador 2, seu prêmio é de R$ {pontosJogador2 + cartela2.max()}.')
    elif vitoriasJogador3 == 16:
        print(f'BINGO! Parabéns Jogador 3, seu prêmio é de R$ {pontosJogador3 + cartela3.max()}.')


# FUNÇÃO: Exibir Pontuação
def PrintPontuacao():
    fimDeJogo()
    print(f'A pontuação do Jogador 1 é {pontosJogador1}')
    print(f'A pontuação do Jogador 2 é {pontosJogador2}')
    print(f'A pontuação do Jogador 3 é {pontosJogador3}')


"""## DESENVOLVER A INTERFACE AQUI:"""

contador = 0

aleatorio = 0

# Determina os parâmetros para a criação da cada cartela

while True:
    print('\nBINGO HEXADECIMAL - MENU:')
    print('Opção 1: Criar/Exibir Cartela: ')
    print('Opção 2: Sortear/Exibir Pedra')
    print('Opção 3: Gerar imagens das cartelas')
    print('Opção 0: Sair do Programa')
    opcao = int(input('Qual a sua Opção: '))

    if opcao == 0:
        print('TCHAU!!! - BOA SORTE')
        break

    elif opcao != 1 and opcao != 2 and opcao != 3:
        print('Opcao Incorreta. Escolha de novo.')

    elif opcao == 1:
        while contador < 3:
            if contador == 0:
                input('\nDigite seu nome (Opcional): ')
                HexCartela1(cartela1)
                PrintCartela1()


            elif contador == 1:
                input('\nDigite seu nome (Opcional): ')
                HexCartela2(cartela2)
                PrintCartela2()

            else:
                input('\nDigite seu nome (Opcional): ')
                HexCartela3(cartela3)
                PrintCartela3()

            contador = contador + 1

    elif opcao == 2:
        checarosnumeros()

    elif opcao == 3:
        Criartabela1()
        MetCartela2()
        MetCartela2()

"""## DICAS PARA EXIBIR MELHOR A CARTELA / NÚMEROS SORTEADOS:

&#10139;  **IMPORTANTE**: USAR O PANDAS **SOMENTE** NA EXIBIÇÃO.
"""


# Por exemplo: Pesquisar a Biblioteca de Plotagem Gráfica do Python: matplotlib

def CriarImagemCartela1():
    rowlen = 4

    fig = plt.figure()
    ax = fig.gca()
    ax.set_xticks(np.arange(0, rowlen + 1))
    ax.set_yticks(np.arange(0, rowlen + 1))
    plt.grid()

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
CriarImagemCartela1()


def CriarImagemCartela2():
    rowlen = 4

    fig = plt.figure()
    ax = fig.gca()
    ax.set_xticks(np.arange(0, rowlen + 1))
    ax.set_yticks(np.arange(0, rowlen + 1))
    plt.grid()

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
CriarImagemCartela2()


def CriarImagemCartela3():
    rowlen = 4

    fig = plt.figure()
    ax = fig.gca()
    ax.set_xticks(np.arange(0, rowlen + 1))
    ax.set_yticks(np.arange(0, rowlen + 1))
    plt.grid()

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
CriarImagemCartela3()

# USAR O PANDAS SOMENTE NA EXIBIÇÃO:
# Usar a CRIATIVIDADE DO GRUPO !!! / Pesquisa para EXIBIR A CARTELA (EM HEXADECIMAL):
import pandas

cartela1 = pandas.DataFrame(CartelaTotal1,
                            index=['LINHA 1', 'LINHA 2', 'LINHA 3', 'LINHA 4'],
                            columns=['COLUNA A', 'COLUNA B', 'COLUNA C', 'COLUNA D'])
cartela1

import pandas

cartela2 = pandas.DataFrame(CartelaTotal2,
                            index=['LINHA 1', 'LINHA 2', 'LINHA 3', 'LINHA 4'],
                            columns=['COLUNA A', 'COLUNA B', 'COLUNA C', 'COLUNA D'])
cartela2

import pandas

cartela3 = pandas.DataFrame(CartelaTotal3,
                            index=['LINHA 1', 'LINHA 2', 'LINHA 3', 'LINHA 4'],
                            columns=['COLUNA A', 'COLUNA B', 'COLUNA C', 'COLUNA D'])
cartela3


