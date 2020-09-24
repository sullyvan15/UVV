base = float(input('Insira a base: '))
altura = float(input('Insira a altura: '))

if base and altura <= 0:
    print('Base e/ou altura inválidos. É permitido somente números maiores que 0')

else:
    perimetro = 2 * base + 2 * altura
    centimetro = perimetro
    polegadas = centimetro * 2.54
    jardas = polegadas * 0.027778
    print(f'\n {centimetro: .2f} Centímetros \n'
          f' {polegadas: .2f} Polegadas \n'
          f' {jardas: .2f} jardas')



#fonte dessas medidas: https://www.metric-conversions.org/





