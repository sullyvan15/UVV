import random
import pandas
import numpy
import matplotlib.pyplot as plt
import matplotlib.style as style
import numpy as np
import random


TAMANHO = 4
cartela1 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela2 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela3 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)


def CriarCartela(cartela1, cartela2, cartela3):

    cartela1[:] = np.array(np.random.permutation(random.sample(range(16, 159), 16))).reshape(4,4)
    cartela2[:] = np.array(np.random.permutation(random.sample(range(16, 159), 16))).reshape(4,4)
    cartela3[:] = np.array(np.random.permutation(random.sample(range(16, 159), 16))).reshape(4,4)
    return cartela1, cartela2, cartela3

CriarCartela(cartela1, cartela2, cartela3)





def HexCartela(Hexcartela1, Hexcartela2, Hexcartela3):
    CriarCartela(cartela1, cartela2, cartela3)
    Hexcartela1 = np.array(np.array2string(cartela1, formatter={'int':lambda cartela1: hex(cartela1)[2:]}))
    Hexcartela2 = np.array(np.array2string(cartela2, formatter={'int':lambda cartela2: hex(cartela2)[2:]}))
    Hexcartela3 = np.array(np.array2string(cartela3, formatter={'int':lambda cartela3: hex(cartela3)[2:]}))

    return Hexcartela1, Hexcartela2, Hexcartela3
HexCartela(Hexcartela1, Hexcartela2, Hexcartela3)


def SortearPedra():
  aleatorio = np.array(random.sample(range(16, 159), 1))
  hex_aleatorio = ([hex(x)[2:] for x in aleatorio])
  print(f'-------- NUMERO SORTEADO: {hex_aleatorio}')
  return aleatorio


def checarosnumeros(streak, pontosJogador1, pontosJogador2, pontosJogador3, vitoriasJogador1, vitoriasJogador2,
                    vitoriasJogador3):
    streak = 0
    pontosJogador1 = 0
    pontosJogador2 = 0
    pontosJogador3 = 0
    vitoriasJogador1 = 0
    vitoriasJogador2 = 0
    vitoriasJogador3 = 0

    pedras = []

    Numeroatual = SortearPedra()

    for x in range(cartela1, cartela2, cartela3):
        while (Numeroatual in pedras):
            Numeroatual = aleatorio
            pedras.append(Numeroatual)

        if (Numeroatual in cartela1):
            print(f'O numero está no cartão 1!')
            streak = + 1
            pontosJogador1 = ((pontosJogador1 + 100) - streak)
            vitoriasJogador1 = + 1

        elif (Numeroatual in cartela2):
            print(f'O numero está na cartela 2!')
            streak = + 1
            pontosJogador2 = ((pontosJogador2 + 100) - streak)
            vitoriasJogador2 = + 1

        elif (Numeroatual in cartela3):
            streak = + 1
            pontosJogador3 = ((pontosJogador3 + 100) - streak)
            vitoriasJogador3 = + 1
            print(f'O numero está na cartela 3!')


        else:
            print(f'O numero não está em nenhuma cartela')
        return streak, pontosJogador1, pontosJogador2, pontosJogador3, vitoriasJogador1, vitoriasJogador2, vitoriasJogador3

    double = list(map(lambda x: [0], hexcartela1))