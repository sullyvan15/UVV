add $t0, $0, $0  #contador = 0
INI_LOOP:
beq $t0, 10, FIM_LOOP
	addi $v0, $s0, 1
	add $a0, $0, $t0
	syscall

	addi $t0, $t0, 1
	j INI_LOOP
FIM_LOOP:
addi $v0, $0, 10
syscall