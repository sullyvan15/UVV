altura = float(input('Digite sua altura em metros: '))
peso = float(input('Digite seu peso em kg: '))
imc = peso / (altura ** 2)

if imc < 18.5:
    print(f'Magreza, seu IMC é de {imc :.1f}')

elif imc > 18.5 and imc < 25:
    print(f'Saudável, seu IMC é de {imc: .1f}')

elif imc == 25 and imc < 30:
    print(f'Obesidade grau I, seu IMC é de {imc: .1f}')

elif imc == 30 and imc <= 40:
    print(f'Obesidade grau II, seu IMC é de {imc :.1f}')

else:
    print(f'Obesidade grau III, procure ajuda médica!, seu IMC é de {imc :.1f}')