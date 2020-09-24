opcao = int(input("Qual moeda você deseja converter?"
                  "1 - Real pra dólar\n "
                  "2 - real pra libra\n "
                  "3 - dólar pra real\n "
                  "4 - dólar pra libra\n "
                  "5 - libra pra real\n "
                  "6 - libra pra dolar\n "
                  "-> "))
if opcao == 1:
    Real = float(input("Insira o valor em real: R$ "))
    Real = Real * 5.50
    print(f' US$ {Real: .2f}')
elif opcao == 2:
    Real = float(input("Insira o valor em real: R$ "))
    Real = Real * 7.23
    print(f' £ {Real: .2f}')
elif opcao == 3:
    dolar = float(input("Insira o valor em Dólar: R$ "))
    dolar = dolar / 5.50
    print(f' BR$ {dolar: .2f}')
elif opcao == 4:
    dolar = float(input("Insira o valor em Dólar: US$ "))
    dolar = dolar * 0.75
    print(f' £ {dolar: .2f}')


elif (opcao == 5):
    Libra = float(input("Insira o valor em Libra: £ "))
    Libra = Libra * 7.23
    print(f' BR$ {Libra}')



elif (opcao == 6):
    Libra = float(input("Insira o valor em Libra: £ "))
    Libra = Libra * 1.34
    print(f' US$ {Libra}')
else:
    print("Opção inválida. Saindo...")

