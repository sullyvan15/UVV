import math
pi = float(math.pi)
raio = float(input('Qual e o raio da boca de fumo: '))
area = pi * math.pow(raio, 2)
comprimento = 2 * pi * raio
print(f'A área é {area: .2f} e o comprimento é {comprimento: .2f}')