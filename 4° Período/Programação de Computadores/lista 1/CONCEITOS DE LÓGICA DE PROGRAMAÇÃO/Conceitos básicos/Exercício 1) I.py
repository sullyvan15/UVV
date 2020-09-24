import math

x1 = int(input('Valor de X¹: '))
x2 = int(input('Valor de X²: '))
y1 = int(input('Valor de Y¹: '))
y2 = int(input('Valor de Y²: '))

p = x2 - x1
q = y2 - y1

d = math.sqrt(math.pow(p, 2) + math.pow(q, 2))
print(f'A distância entre dois pontos é {d: .2f}')