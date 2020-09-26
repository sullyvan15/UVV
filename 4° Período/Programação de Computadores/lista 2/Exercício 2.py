somatorio = 0
med = 0
cont = 0
# Necessita de revisão
for cont in range (200, 100, -1):
    if(cont % 11 == 0):
        
        print(f'Multiplo: {cont}')
        somatorio = cont + somatorio
        med = somatorio / cont
    print(f'somatorio: {somatorio}')
    print(f'med: {med}')