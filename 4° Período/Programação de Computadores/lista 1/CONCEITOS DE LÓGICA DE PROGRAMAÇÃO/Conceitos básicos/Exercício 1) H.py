

import math

pi = math.pi
raio = float(input('Qual é o raio da esfera?: '))
volume_esf = 4/3*pi*math.pow(raio, 3)


litro = 1
lata = litro*5
precolata = 50.00

totaltinta = volume_esf *lata
totalpreco = totaltinta * precolata

print(f'O volume da esfera é {volume_esf: .2f}')
print(f'A quantidade de tinta necessária é {totaltinta} litros de tinta')
print(f'O total a pagar é: R$ {totalpreco: .2f}')

#AE TO COM DUVIDA
