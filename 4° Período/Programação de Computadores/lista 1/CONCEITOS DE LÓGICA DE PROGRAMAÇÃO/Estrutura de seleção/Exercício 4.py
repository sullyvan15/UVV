altura = float(input('Qual é a altura?: '))
sexo = int(input(' (1 - para homem \n '
                 '2 - para mulher) '
                '\n Qual é o sexo:\n'))


if sexo == 1:
    homem = (72.7 * altura) - 58
    print(f'{homem: .1f} quilogramas')
if sexo == 2:
    mulher = (62.1 * altura) - 44.7
    print(f'{mulher: .1f} quilogramas')
else:
    print('Opção inválida')
