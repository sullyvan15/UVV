# -*- coding: utf-8 -*-
"""Novo Bingo Nerd.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1OfrIw5yExomcknBHoJr0JArBnWO986Ci

##Funções:
"""

# BIBLIOTECA

import random
import pandas
import numpy
import matplotlib.pyplot as plt
import matplotlib.style as style
import numpy as np
import random

# CRIAR CARTELA
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

# CONVERTER PARA HEXADECIMAL
def HexCartela():
    np.set_printoptions(formatter={'int':lambda x: hex(x)[2:]})
HexCartela()

# SORTEAR UMA PEDRA
def SortearPedra():
  aleatorio = np.array(random.sample(range(16, 159), 1))
  hex_aleatorio = ([hex(x)[2:] for x in aleatorio])
  print(f'-------- NUMERO SORTEADO: {hex_aleatorio}')
  return aleatorio

# CONTAGEM DE PO
streak = 0
pontosJogador1 = 0
pontosJogador2 = 0
pontosJogador3 = 0
vitoriasJogador1 = 0
vitoriasJogador2 = 0
vitoriasJogador3 = 0
def checarosnumeros():
  global streak
  global pontosJogador1
  global pontosJogador2
  global pontosJogador3
  global vitoriasJogador1
  global vitoriasJogador2
  global vitoriasJogador3
  

  pedras = []

  Numeroatual = SortearPedra()

  
  while (Numeroatual in pedras):
    Numeroatual = aleatorio                                         
    pedras.append(Numeroatual)


  if (Numeroatual in cartela1):                           
    print(f'O numero está no cartão 1!') 
    streak = streak + 1                                         
    pontosJogador1 = ((pontosJogador1 + 100) - streak)                                  
    vitoriasJogador1 = vitoriasJogador1 + 1

  elif (Numeroatual in cartela2):                                   
    print(f'O numero está na cartela 2!')   
    streak = streak + 1                                            
    pontosJogador2 = ((pontosJogador2 + 100) - streak)                                
    vitoriasJogador2 = vitoriasJogador2 + 1
    
  elif (Numeroatual in cartela3):
    streak = streak + 1                                             
    pontosJogador3 = ((pontosJogador3 + 100) - streak)                                 
    vitoriasJogador3 =  vitoriasJogador3 + 1                                             
    print(f'O numero está na cartela 3!')  


  else: 
    print(f'O numero não está em nenhuma cartela')
    return streak, pontosJogador1, pontosJogador2, pontosJogador3, vitoriasJogador1, vitoriasJogador2, vitoriasJogador3

#EXBIR EM HEXADECIMAL
hx1 = np.array(cartela1)
hx2 = np.array(cartela2)
hx3 = np.array(cartela3)
def PrintCartela(HexCartela):
  hx1 = np.array(cartela1)
  hx2 = np.array(cartela2)
  hx3 = np.array(cartela3)
  print(f'{hx1} \n\n {hx2} \n\n {hx3}')
  return hx1, hx2, hx3

def fimDeJogo():
  global NomeJogador1
  global NomeJogador2
  global NomeJogador3
  global vitoriasJogador1
  global vitoriasJogador2
  global vitoriasJogador3
  
  if vitoriasJogador1 == 1:
        print(f'BINGO! Parabéns Jogador 1, {NomeJogador1}, seu prêmio é de R$ {pontosJogador1 + cartela1.max()}.')
        PrintPontuacao()

       
  
  elif vitoriasJogador2 == 1:
        print(f'BINGO! Parabéns Jogador 2, {NomeJogador2}, seu prêmio é de R$ {pontosJogador2 + cartela2.max()}.')
        PrintPontuacao()
        
        
  
  elif vitoriasJogador3 == 1:
        print(f'BINGO! Parabéns Jogador 3, {NomeJogador3}, seu prêmio é de R$ {pontosJogador3 + cartela3.max()}.')
        PrintPontuacao()

def PrintPontuacao():
  global pontosJogador1
  global pontosJogador2
  global pontosJogador3
  print(f'A pontuação do Jogador 1 é {pontosJogador1}')
  print(f'A pontuação do Jogador 2 é {pontosJogador2}')
  print(f'A pontuação do Jogador 3 é {pontosJogador3}')
PrintPontuacao()

"""##Metspoit"""

def CriarImagemCartela1():
  
  rowlen= 4  
    
  fig = plt.figure()
  ax = fig.gca()
  ax.set_xticks(np.arange(0, rowlen + 1))
  ax.set_yticks(np.arange(0, rowlen + 1))
  plt.grid()
  hexcartela10 = ([hex(x)[2:] for x in cartela1[:, 0]])
  hexcartela11 = ([hex(x)[2:] for x in cartela1[:, 1]])
  hexcartela12 = ([hex(x)[2:] for x in cartela1[:, 2]])
  hexcartela13 = ([hex(x)[2:] for x in cartela1[:, 3]])
    
  for i, word in enumerate(hexcartela10[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 3.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela11[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 2.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela12[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 1.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela13[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 0.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
plt.show()
CriarImagemCartela1()

def CriarImagemCartela2():
  
  rowlen= 4  
    
  fig = plt.figure()
  ax = fig.gca()
  ax.set_xticks(np.arange(0, rowlen + 1))
  ax.set_yticks(np.arange(0, rowlen + 1))
  plt.grid()
  hexcartela20 = ([hex(x)[2:] for x in cartela2[:, 0]])
  hexcartela21 = ([hex(x)[2:] for x in cartela2[:, 1]])
  hexcartela22 = ([hex(x)[2:] for x in cartela2[:, 2]])
  hexcartela23 = ([hex(x)[2:] for x in cartela2[:, 3]])
      
  for i, word in enumerate(hexcartela20[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 3.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela21[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 2.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela22[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 1.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela23[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 0.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
plt.show()
CriarImagemCartela1()

def CriarImagemCartela3():
  
  rowlen= 4  
    
  fig = plt.figure()
  ax = fig.gca()
  ax.set_xticks(np.arange(0, rowlen + 1))
  ax.set_yticks(np.arange(0, rowlen + 1))
  plt.grid()
  hexcartela30 = ([hex(x)[2:] for x in cartela3[:, 0]])
  hexcartela31 = ([hex(x)[2:] for x in cartela3[:, 1]])
  hexcartela32 = ([hex(x)[2:] for x in cartela3[:, 2]])
  hexcartela33 = ([hex(x)[2:] for x in cartela3[:, 3]])

  for i, word in enumerate(hexcartela30[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 3.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela31[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 2.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela32[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 1.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
  for i, word in enumerate(hexcartela33[:rowlen**2]):
      x = (i % rowlen) + 0.4
      y = int(i / rowlen) + 0.5
      ax.annotate(word, xy=(x, y), xytext=(x, y))
plt.show()
CriarImagemCartela1()

"""##Interface:"""

contador = 0

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
              
              NomeJogador1 = input('\nJogador 1, digite seu nome (Opcional): ')
              print(hx1)

            elif contador == 1:

              NomeJogador2 = input('\nJogador 2, digite seu nome (Opcional): ')
              print(hx2)

            else:
              NomeJogador3 = input('\nJogador 3, digite seu nome (Opcional): ')
              print(hx3)
  

            contador = contador + 1

    elif opcao == 2:
        checarosnumeros()
        fimDeJogo()
        
        

    elif opcao == 3:
        CriarImagemCartela1()
        CriarImagemCartela2()
        CriarImagemCartela3()
        break

"""##Pandas:"""

hexcartela10 = ([hex(x)[2:] for x in cartela1[:, 0]])
hexcartela11 = ([hex(x)[2:] for x in cartela1[:, 1]])
hexcartela12 = ([hex(x)[2:] for x in cartela1[:, 2]])
hexcartela13 = ([hex(x)[2:] for x in cartela1[:, 3]])
PandaCartela1 = [hexcartela10, hexcartela11, hexcartela12, hexcartela13]


cartela1 = pandas.DataFrame(PandaCartela1, 
                            index=['B', 'IN', 'G', 'O'], 
                          columns=['B', 'IN', 'G','O'])
cartela1

hexcartela20 = ([hex(x)[2:] for x in cartela2[:, 0]])
hexcartela21 = ([hex(x)[2:] for x in cartela2[:, 1]])
hexcartela22 = ([hex(x)[2:] for x in cartela2[:, 2]])
hexcartela23 = ([hex(x)[2:] for x in cartela2[:, 3]])
PandaCartela2 =[hexcartela20, hexcartela21, hexcartela22, hexcartela23]

cartela2 = pandas.DataFrame(PandaCartela2, 
                            index=['B', 'IN', 'G', 'O'], 
                          columns=['B', 'IN', 'G','O'])
cartela2

hexcartela30 = ([hex(x)[2:] for x in cartela3[:, 0]])
hexcartela31 = ([hex(x)[2:] for x in cartela3[:, 1]])
hexcartela32 = ([hex(x)[2:] for x in cartela3[:, 2]])
hexcartela33 = ([hex(x)[2:] for x in cartela3[:, 3]])

PandaCartela3 = [hexcartela30, hexcartela31, hexcartela32, hexcartela33]
cartela3 = pandas.DataFrame(PandaCartela3, 
                           index=['B', 'IN', 'G', 'O'], 
                          columns=['B', 'IN', 'G','O'])
cartela3