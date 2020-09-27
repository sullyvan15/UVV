numero = int(input('Insira o Número: '))
contador = 0
soma = 0
for x in range(6, 6 * numero):
    if x % 6 == 0:
        print(f'{x}')
        contador += 1
        soma = soma + x
print(f'Somatória: {soma}')
media = soma / contador
print(f'Quantidade de Múltiplos: {contador}')
print(f'Média dos Múltiplos: {media}')