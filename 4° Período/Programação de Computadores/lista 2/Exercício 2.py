soma = 0
media = 0
contador = 0

for contador in range(200, 100, -1):
    if contador % 11 == 0:
        print(f'Multiplo: {contador}')
        soma = contador + soma
        media = soma / contador
print(f'soma: {soma}')
print(f'media: {media}')
