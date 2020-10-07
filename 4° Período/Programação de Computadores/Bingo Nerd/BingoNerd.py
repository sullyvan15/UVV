opcao = 0
contador = 0
TAMANHO = 4

import numpy

cartela1 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela2 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
cartela3 = numpy.zeros((TAMANHO, TAMANHO), dtype=int)
while True:
  print('BINGO HEXADECIMAL - MENU:')
  print('Opção 1: Criar/Exibir Cartela: ')
  print('Opção 2: Sortear/Exibir Pedra')
  print('Opção ?: ... desenvolvida pelo grupo')
  print('Opção 0: Sair do Programa')
  opcao = int(input('Qual a sua Opção: '))
  if opcao == 0:
    print('TCHAU!!! - BOA SORTE')
    break
  elif (opcao != 1 and opcao != 2):
    print('Opcao Incorreta. Escolha de novo.')
  elif (opcao == 1):
    while(contador < 3):
      if (contador == 0):
        input('\nDigite seu nome: ')
        # Usar as Funções (def) a partir aqui:
        cartela1[:, 0]= numpy.random.randint(16, 159, TAMANHO)
        cartela1[:, 1]= numpy.random.randint(16, 159, TAMANHO)
        cartela1[:, 2]= numpy.random.randint(16, 159, TAMANHO)
        cartela1[:, 3]= numpy.random.randint(16, 159, TAMANHO)
        print('\n', cartela1)
      elif(contador == 1):
        input('Digite seu nome: ')
        # Usar as Funções (def) a partir aqui:
        cartela2[:, 0]= numpy.random.randint(16, 159, TAMANHO)
        cartela2[:, 1]= numpy.random.randint(16, 159, TAMANHO)
        cartela2[:, 2]= numpy.random.randint(16, 159, TAMANHO)
        cartela2[:, 3]= numpy.random.randint(16, 159, TAMANHO)
        print('\n', cartela2)
      else:
        input('Digite seu nome: ')
        # Usar as Funções (def) a partir aqui:
        cartela3[:, 0]= numpy.random.randint(16, 159, TAMANHO)
        cartela3[:, 1]= numpy.random.randint(16, 159, TAMANHO)
        cartela3[:, 2]= numpy.random.randint(16, 159, TAMANHO)
        cartela3[:, 3]= numpy.random.randint(16, 159, TAMANHO)
        print('\n', cartela3)

        contador = contador + 1
