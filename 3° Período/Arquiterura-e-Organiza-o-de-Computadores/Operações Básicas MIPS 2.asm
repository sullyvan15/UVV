.data 

.text
	#Ler valor 1
	addi $v0, $0, 5  	#vo = 5
	syscall
	add $t0, $v0, $0
	
	#Ler valor 2
	addi $v0, $0, 5  	#vo = 5
	syscall
	add $t1, $v0, $0

	#SOMA
	add $t2, $t0, $t1
	
	#print do resultado
	addi $v0, $0, 1		# = li $v0, 1
	add $a0, $t2, $0	
	syscall
	
	