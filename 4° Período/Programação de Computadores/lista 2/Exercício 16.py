i = 0
maiorpar = 0
maiorimpar = 0
menorpar = menorimpar = 9999999999

while (i < 10):
    numero = float(input('Entre com um número: '))
    if (numero % 2 == 0):
        if (numero > maiorpar):
            maiorpar = numero
        if (numero < menorpar):
            menorpar = numero
    else:
        if (numero > maiorimpar):
            maiorimpar = numero
        if (numero < menorimpar):
            menorimpar = numero
    i = i + 1

print(f'Maior par: {maiorpar} e Menor par: {menorpar} \n'
      f'Maior Impar: {maiorimpar} e Menor Impar: {menorimpar}')