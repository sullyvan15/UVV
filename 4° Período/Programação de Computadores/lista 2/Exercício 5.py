
empregado = 0;
desempregado = 0;
ContHab = 1;
habitante = 10000
for h in range(0, 10):
    ler = int(input(f'Habitante {ContHab} esta? Digite 1-Sim 2-Não '))
    if ler != 1 and ler != 2:
        print("Dados inválidos. Tente novamente.")
    else:
        ContHab += 1
        if ler == 1:
            empregado += 1
        else:
            desempregado += 1

QuantEmpregado = empregado * 100 / habitante
QuantDesempregado = desempregado * 100 / habitante

print(f'Quantidade de Empregados: {empregado} sendo {QuantEmpregado: .2f}% do Total de habitantes ')
print(f'Quantidade de Desempregados: {desempregado} sendo {QuantDesempregado: .2f}% do Total de habitantes ')