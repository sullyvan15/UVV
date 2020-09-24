import math

sindicato = 0.05
impostoRenda = 0.11
inss = 0.08


salario = float(input('Quanto é o seu salário?: R$ '))
DesINSS = salario * inss
DesSind = salario * sindicato
desconto = DesINSS + DesSind + impostoRenda
SalarioLiq = salario - desconto


print(f'\n Salario bruto: R${salario: .2f}\n '
      f'INSS: R${DesINSS: .2f}\n'
      f' Sindicato (Ainda bem que o Temer acabou com isso): R$ {DesSind: .2f}\n '
      f'A merreca que sobrou:R${SalarioLiq: .2f} ')