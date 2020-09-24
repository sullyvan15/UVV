import sys

publico = 0
Arrecadação = 0.00


while publico < 2:                              # Aqui ficaria a quantidade limite de pessoas
    Idade = int(input("Qual a sua idade: "))
    Ingresso = float(input("Valor do ingresso: R$ "))

    if Idade < 10:
        Ingresso = 0.00
        print(f'R$ {Ingresso: 2f}\n Crianças abaixo de 10 anos não pagam \n')
        publico = publico + 1
        Arrecadação = Arrecadação + Ingresso

    elif Idade > 10 and Idade < 18:
        Ingresso = Ingresso / 2
        print(f'R$ {Ingresso: .2f}\n Jovens de 11 a 17 pagam ½ entrada \n')
        publico = publico + 1
        Arrecadação = Arrecadação + Ingresso

    else:
        alimento = int(input("\nTrouxe alimento?\n 1 - Sim\n 2 - não: \n ->"))
        if alimento == 1:
            Ingresso = Ingresso / 2
            publico = publico + 1
            Arrecadação = Arrecadação + Ingresso
            print(f'Valor do ingresso: R$ {Ingresso: .2f}\n')

        else:
            print(f'Valor do ingresso: R$ {Ingresso: .2f}\n')
            publico = publico + 1
            Arrecadação = Arrecadação + Ingresso


#################################################################################
print(f'Total de {publico} pessoas e R$ {Arrecadação: .2f} em ingressos vendidos')





