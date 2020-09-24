print('calculo para verificar o tempo de download de um arquivo ')

tamanho = int(input("Entre com o tamanho do arquivo (MB)"))
velocidade = int(input("Insira a velocidade de internet (Mbps):"))
resultado = tamanho / velocidade * 60
print(f'\n Tempo para download: {resultado: .0f} minutos.')


#falta os segundos