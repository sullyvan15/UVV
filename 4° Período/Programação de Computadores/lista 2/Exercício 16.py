i = maiorpar = maiorimpar = 0
menorpar = menorimpar = 9999999999

while (i < 3):
    numero = float(input('Entre com um número postivo: '))
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

    print(f'Maior par: {maiorpar}  Menor par: {menorpar}  Maior Impar: {maiorimpar} Menor Impar: {menorimpar}')