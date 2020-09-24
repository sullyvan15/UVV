massa = float(input("Insira a quantidade em gramas (g) para conversão: "))
opcao = int(input("Para qual unidade você deseja converter? \n"
                  "1 - Onça\n "         
                  "2 - Tonelada\n "
                  "3 - Quilograma\n "
                  "-> "))
if opcao == 1:
    Onca = massa * 28.35
    print(f'{Onca: .2f} Oz ')


elif opcao == 2:
   Tonelada = massa / 100000
   print(f'{Tonelada: .2f} T')

elif opcao == 3:
   Quilograma = massa / 1000
   print(f'{Quilograma: .2f} Kg')
else:
    print("Opção inválida. Saindo...")

