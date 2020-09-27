
soma = 0
for x in range(10, 90):
    ler = int(input('Digite um Número que dividido por 5, o resto é 2, Pressione 0 para parar: '))
    if ler % 5 == 2:
        print(f'O Número {ler} está Aprovado')
        soma = soma + ler
    elif ler > 0 and ler < 10:
        print('Erro Na Leitura, Porfavor Escolha Valores entre 10 a 90')
    elif ler == 0:
        print('Fim da Leitura')
        break
    else:
        print('O Número não é divisível por 5 ou resto não = 2')

print(f'Somatória dos Números Lidos: {soma}')