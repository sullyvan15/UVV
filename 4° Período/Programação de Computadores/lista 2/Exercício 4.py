somapar = 0
somaimpar = 0
conta = 0
contar = 0
# ok
for contador in range(10, 99):
    if contador % 2 == 0:
        somapar = somapar + contador

    else:
        somaimpar = somapar + contador

print(f'Soma dos pares: {somapar}')
print(f'Soma dos impares: {somaimpar}')
