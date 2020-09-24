import math

pi = math.pi
raio = float(input('Qual é o raio da esfera?: '))
volume_esf = 4/3*pi*math.pow(raio, 3)
print(f'O volume da esfera é {volume_esf: .2f}')