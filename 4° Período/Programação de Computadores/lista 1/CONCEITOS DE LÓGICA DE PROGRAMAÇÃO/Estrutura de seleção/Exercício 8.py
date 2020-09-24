Opcao = int(input("Qual a unidade que você deseja coverter? \n"
                  "1 - De Celsius para Fahrenheit\n"
                  "2 - De Fahrenheit para Celsius\n "
                  "-> "))



if (Opcao == 1):
    celsius = int(input("Insira o grau na unidade Celsius (C°): "))
    ctof = celsius * 1.8 + 32
    print(F'{ctof} Fahrenheit')

elif (Opcao == 2):
    Fahrenheit = int(input("Insira o grau na unidade Fahrenheit (F°): "))
    ftoc = (Fahrenheit - 32) / 1.8
    print(F'{ftoc} celsius')

else:
    print("Opção errada. Encerrando a aplicação...")
