print('Os multiplos de 3 no intervalo entre [3, 100] são:')

# ok
for x in range(3, 100):
    if x % 3 == 0:
        print(f'Multiplo: {x}')
