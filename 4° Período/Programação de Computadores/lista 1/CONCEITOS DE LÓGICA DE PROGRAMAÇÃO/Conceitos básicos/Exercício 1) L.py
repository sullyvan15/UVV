import math
pi = math.pi
raio = float(input('Qual é o raio da esfera?: '))

metro_cub = math.pow(raio, 3)
metro = 1000 + metro_cub
volume_esf = (4 / 3 * pi * metro)


# --------------------------------------------------------------------------------
kilometro = volume_esf / 10

# gasta = 1350/3600 -> 1350 Litros divididos em 3600 segundos = 1 hora

# AE TO COM DUVIDA
print(kilometro)