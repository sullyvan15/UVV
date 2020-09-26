print ('Os numeros impares multiplos de 3 e não multiplos de 5 no intervalo [9,90] são: ')

soma = 0
contagem = 0
# Ok
for contador in range(9, 90):
    if (contador % 2 == 1 and contador % 3 == 0 and contador % 5!= 0):
        soma = contador + soma
        contagem = contagem = contagem + 1


        print(f'Soma N°{contagem}: {soma}')
