	 .data
 out_string: .ascii "\nHello, World!\n"
 	.text
 
 main:
 
 	li $v0, 4
 	la $a0, out_string
 	syscall