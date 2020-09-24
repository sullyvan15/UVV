import math
import datetime
pi = math.pi
raio = float(input('Qual é o raio da esfera?: '))
metro_cub = math.pow(raio, 3)

volume_esf = (4 / 3 * pi * metro_cub)
volume = metro_cub *1000
# --------------------------------------------------------------------------------


# gasta = 1350/3600 -> 1350 Litros divididos em 3600 segundos = 1 hora

# AE TO COM DUVIDA
segundos = volume * 1350/3600


dias = segundos // 86400
segundos_rest = segundos % 86400
horas = segundos_rest // 3600
segundos_rest = segundos_rest % 3600
minutos = segundos_rest // 60
# segundos_rest = segundos_rest % 60
print(f'Essa caixa é autônoma por {dias} dias, {horas} horas e {minutos} minutos')
