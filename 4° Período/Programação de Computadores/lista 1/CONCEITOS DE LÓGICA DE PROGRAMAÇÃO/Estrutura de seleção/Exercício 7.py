mercadoria = float(input("Insira o valor da mercadoria: "))
preco = mercadoria * 0.03
opcao = int(input("Gostaria de um acréscimo ou desconto? \n"
                  "1 - Desconto \n"
                  "2 - Acréscimo \n"
                  "-> "))
if (opcao == 1):
    Desconto = mercadoria - preco
    print(f'{Desconto: .2f}')
elif (opcao == 2):
    Acrescimo = mercadoria + preco
    print(f'{Acrescimo: .2f}')
else:
    print("Opção errada. Escolha novamente!")