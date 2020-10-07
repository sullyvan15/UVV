contador = 0
TAMANHO = 4
aleatorio = 0

import random
import numpy
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.style as style
import numpy as np
import random

style.use('seaborn-poster')

cartela1 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela2 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela3 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)

RepeticaoCartela = random.sample(range(16, 159), TAMANHO)
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

                # Usar as Funções (def) a partir aqui:
                cartela1[:, 0] = random.sample(range(16, 159), TAMANHO)
                cartela1[:, 1] = random.sample(range(16, 159), TAMANHO)
                cartela1[:, 2] = random.sample(range(16, 159), TAMANHO)
                cartela1[:, 3] = random.sample(range(16, 159), TAMANHO)
                print([hex(x)[2:] for x in cartela1[:, 0]])
                print([hex(x)[2:] for x in cartela1[:, 1]])
                print([hex(x)[2:] for x in cartela1[:, 2]])
                print([hex(x)[2:] for x in cartela1[:, 3]])


            elif (contador == 1):
                input('\nDigite seu nome: ')
                # Usar as Funções (def) a partir aqui:
                cartela2[:, 0] = random.sample(range(16, 159), TAMANHO)
                cartela2[:, 1] = random.sample(range(16, 159), TAMANHO)
                cartela2[:, 2] = random.sample(range(16, 159), TAMANHO)
                cartela2[:, 3] = random.sample(range(16, 159), TAMANHO)
                print([hex(x)[2:] for x in cartela2[:, 0]])
                print([hex(x)[2:] for x in cartela2[:, 1]])
                print([hex(x)[2:] for x in cartela2[:, 2]])
                print([hex(x)[2:] for x in cartela2[:, 3]])
            else:
                input('\nDigite seu nome: ')
                # Usar as Funções (def) a partir aqui:
                cartela3[:, 0] = random.sample(range(16, 159), TAMANHO)
                cartela3[:, 1] = random.sample(range(16, 159), TAMANHO)
                cartela3[:, 2] = random.sample(range(16, 159), TAMANHO)
                cartela3[:, 3] = random.sample(range(16, 159), TAMANHO)
                print([hex(x)[2:] for x in cartela3[:, 0]])
                print([hex(x)[2:] for x in cartela3[:, 1]])
                print([hex(x)[2:] for x in cartela3[:, 2]])
                print([hex(x)[2:] for x in cartela3[:, 3]])

            contador = contador + 1

    elif (opcao == 2):
        aleatorio = random.sample(range(16, 159), 1)
        hex_aleatorio = ([hex(x)[2:] for x in aleatorio])
        print(f'-------- NUMERO SORTEADO: {hex_aleatorio}')

rowlen = 4  # make any size card you'd like

fig = plt.figure()
ax = fig.gca()
ax.set_xticks(np.arange(0, rowlen + 1))
ax.set_yticks(np.arange(0, rowlen + 1))
plt.grid()

for i, word in enumerate(cartela1[:, 0][:rowlen ** 2]):
    x = (i % rowlen) + 0.4
    y = int(i / rowlen) + 0.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela1[:, 1][:rowlen ** 2]):
    x = (i % rowlen) + 1.4
    y = int(i / rowlen) + 1.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela1[:, 2][:rowlen ** 2]):
    x = (i % rowlen) + 2.4
    y = int(i / rowlen) + 2.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela1[:, 3][:rowlen ** 2]):
    x = (i % rowlen) + 3.4
    y = int(i / rowlen) + 3.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))

for i, word in enumerate(cartela2[:, 0][:rowlen ** 2]):
    x = (i % rowlen) + 0.4
    y = int(i / rowlen) + 0.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela2[:, 1][:rowlen ** 2]):
    x = (i % rowlen) + 1.4
    y = int(i / rowlen) + 1.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela2[:, 2][:rowlen ** 2]):
    x = (i % rowlen) + 2.4
    y = int(i / rowlen) + 2.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela2[:, 3][:rowlen ** 2]):
    x = (i % rowlen) + 3.4
    y = int(i / rowlen) + 3.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))

for i, word in enumerate(cartela3[:, 0][:rowlen ** 2]):
    x = (i % rowlen) + 0.4
    y = int(i / rowlen) + 0.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela3[:, 1][:rowlen ** 2]):
    x = (i % rowlen) + 1.4
    y = int(i / rowlen) + 1.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela3[:, 2][:rowlen ** 2]):
    x = (i % rowlen) + 2.4
    y = int(i / rowlen) + 2.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
for i, word in enumerate(cartela3[:, 3][:rowlen ** 2]):
    x = (i % rowlen) + 3.4
    y = int(i / rowlen) + 3.5
    ax.annotate(word, xy=(x, y), xytext=(x, y))
plt.show()
