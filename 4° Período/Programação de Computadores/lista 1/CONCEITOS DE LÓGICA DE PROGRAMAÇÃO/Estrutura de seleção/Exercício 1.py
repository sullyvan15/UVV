
import math
pi = math.pi

raio = int(input('Insira o raio: '))
if raio <= 0 :
    print('Valor de raio inválido: raio 𝑟 (∈ ℝ+ ∗)')
else:
    area = 4 * pi * math.pow(raio, 2)
    volume = 4 / 3 * pi * math.pow(raio, 3)
    print(f'\n Área = {area: .2f}\n Volume = {volume: .2f}')





