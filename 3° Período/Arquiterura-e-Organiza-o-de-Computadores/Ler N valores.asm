.data
	vet:  .space 4000
	maior: .word 0
	menor: .word 0
	
.text
	la $s0, vet  #s0 =end. base do vetor
	addi $v0, $0, 5  #v0 = 5
	syscall		#scanf
	add $t0, $0, $v0 #t0 = N
	
	addi $s7, $0, -200000 
	addi $s6, $0, 200000 
	
	add $t1, $0, $0 #t1 = i = 0
ini_loop: 
	beq $t1, $t0, fim_loop
	
	
	addi $v0, $0, 5 #v0 = 5
	syscall		#scanf
	add $t4, $0, $v0 #t4=n_esimo
	
	
	#salvar na memoria
	sw $t4, 0($s0)
	addi $s0, $s0, 4
	
	#verificar se é maior
	bgt $s7, $t4, naomaior
	add $s7, $0, $t4 #maior = t4
naomaior:
	blt $s6, $t4, naomenor
	add $s6, $0, $t4 #menor = t4
naomenor:
	addi $t1, $t1, 1 #i++
	
	
	
	j ini_loop
	
fim_loop: 
  	#print maior
  	addi $v0, $0, 1 #v0 = 1
  	add $a0, $0 , $s7
  	syscall	#printf
  
  	#print menor
  	addi $v0, $0, 1 #v0 = 1
  	add $a0, $0, $s6
  	syscall 	#printf

	