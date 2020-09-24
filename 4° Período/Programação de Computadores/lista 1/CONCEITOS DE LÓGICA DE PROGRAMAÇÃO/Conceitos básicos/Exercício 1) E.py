import math

altura = float(input('Quanto tu mede, portão de cemiterio?: '))
massa = int(input('quanto tu pesa? Só pra ver se o carro aguenta: '))
imc = massa/math.pow(altura, 2)
print(f'O seu IMC é {imc: .2f}')