

.text
	
	addi $v0, $0, 5  #v0 = 5
	syscall		#scanf
	add $t0, $0, $v0 #t0 = N
	
	addi $1, $0, 0 #s1=0
	#print s1
	addi $2, $0, 1 #s2 = 1
	#print s2
	add $t1, $0, $0 #t1 = i = 0
	
	
ini_loop: 
	 beq $t1, $t0 , fim_loop
	 add $s3, $s1, $s2
	 
	 #print s3
	 add $s1, $0, $s2 #s1 = s2
	 add $s2, $0, $s3 #s2 = s3
	 addi $t1, $t1, 1 #i++
	j ini_loop
	
fim_loop: 
  	
	