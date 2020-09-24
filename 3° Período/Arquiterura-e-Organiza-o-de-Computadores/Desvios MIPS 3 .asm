#Ler nota 1
.data
MAPR: .Asciiz "Aprovado!"
MRPR: .Asciiz "Reprovado!"
MFIN: .Asciiz "De final!"

.text 
addi $v0, $0, 5
syscall
add $s1, $0, $v0

#ler nota 2
addi $v0, $0, 5
syscall
add $s2, $0, $v0     
add $t0, $s1, $s2	# Soma das notas

#Desvios
bge $t0, 14, APROVADO
blt $t0, 6, REPROVADO

#Ta de final
addi $v0, $0, 4
la $a0, MFIN
Syscall


#ler nota final
addi $v0, $0, 5
syscall
add $s2, $0, $v0     
add $t1, $t0, $s2 #final + media
bge $t1, 13, APROVADO
j REPROVADO


APROVADO:
#v0 = 4, ao = end da string
addi $v0, $0, 4
la $a0, MAPR
syscall
j FIMPROGRAMA


REPROVADO:
#v0 = 4, ao = end da string
addi $v0, $0, 4
la $a0, MRPR
syscall
j FIMPROGRAMA

FIMPROGRAMA:
addi $v0, $0, 10

