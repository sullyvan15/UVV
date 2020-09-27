
salMinimo = 998.05
contclient = 0

a = 0
b = 0
c = 0

TotalCliente = int(input('Insira a Quantidade de Cliente a ser Pesquisado: '))

for x in range(0, TotalCliente):
    contclient += 1
    salario = float(input(f'Insira o Salário do Cliente {contclient} em R$: '))
    if salario >= (salMinimo * 15):
        print('Cliente Tipo A ')
        a += 1
    elif salario < (salMinimo * 15) and salario >= (salMinimo * 5):
        print('Cliente Tipo B')
        b += 1

    else:
        print('Cliente Tipo C')
        c += 1


claA = a * 100 / TotalCliente

claB = b * 100 / TotalCliente

claC = c * 100 / TotalCliente

print(f'Total de Tipos de Clientes:')
print(f'A = {a} Cerca de {claA: .1f}%')
print(f'B = {b} Cerca de {claB: .1f}%')
print(f'C = {c} Cerca de {claC: .1f}%')