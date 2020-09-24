
A = float(input('Lado 1: '))
B = float(input('Lado 2: '))
C = float(input('Lado 3: '))
if A < B + C and B < A + C and C < A + B:
      print(f'As medidas {A}, {B} e {C} formam um triângulo:')
      if A == B and B == C:
            print('EQUILÁTERO')
      elif A != B and B != C and A != C:
            print('ESCALENO')
      else:
            print('ISOSCELES')
else:
    print(f'As medidas {A}, {B} e {C} NÃO formam um triângulo.')