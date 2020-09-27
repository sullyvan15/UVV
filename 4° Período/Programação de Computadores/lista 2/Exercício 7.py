soma = 0
posicao = 0
# Ok
for contador in range(9, 90):
    if contador % 2 == 1 and contador % 3 == 0 and contador % 5 != 0:
        soma = contador + soma
        posicao = posicao = posicao + 1

        print(f'Soma N°{posicao}: {soma}')
