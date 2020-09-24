segundos = int(input("O tempo (em segundos) em que o aluno ficou no laboratório: "))


segundos_rest = segundos % 86400
horas = segundos_rest // 3600
segundos_rest = segundos_rest % 3600
minutos = segundos_rest // 60
segundos_rest = segundos_rest % 60

print("O aluno permaneceu no laboratório por", horas,"horas,",minutos,"minutos e",segundos_rest,"segundos.")