/* 1 a)
*/

#include <stdio.h>
#include <stdlib.h>

int main()
 {
 	int a = 5, b, c ,d;

 	a--;
 	b = a % 3 *5;
 	c = (a + b) % 2;
 	d = c++;
 	d = ++c;
 	printf("Valor de a: %i/n  Valor de b:%i/n Valor de c: %i/n Valor de d: %i/n", a,b,c,d );


}
return 0;

/* 1 b)
*/

#include <stdio.h>
#include <stdlib.h>

int main()
 {
 	int a = 1, b, c d;

 	a*=-7;
 	b = a * 5 % 6;
 	c = a + b % 3;
 	d = c--;
 	d = --c;

 	printf("valor de a : %i/n valor de b: %i/n valor de c: %i/n  valor de d: %i/n" , a, b, c,d);


	}
return 0;



/* 1 c)
*/


#include <stdio.h>
#include <stdlib.h>

int main() 
{
	int a = -1, b, c, d;

	a*=-7;
	b = a * 5 % 6;
	c = a + b % 3;
	d = c--;
	d = --c;

	printf("Valor de a: %i/n Valor de b: %i/n Valor de c: %i/n Valor de d: %i/n", a,b,c,d );
}
return 0;


/* 1 c)
*/


#include <stdio.h>
#include <stdlib.h>

int main() 
{
	int a = 23, b, c,d;
	a%=5;
	b = !a;
	d = !c && b;
	d = !a  || !c;

	printf("valor de a: %i/n valor de b: %i/n valor de c: %i/n valor de d: %i/n", a,b,c,d );
	return 0;

}


/* 2 a)
*/


#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
	int a, b, c;

	printf("Qual é o valor de B" /n);
	scanf ("%i" , &b);
	printf("Qual é o valor de C" /n);
	scanf ("%i" , &c);

	a = sqrt(b*b + c*c);

	printf("Valor de a: %i/n", a);
return 0


}

/* 2 b)
*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
	int l, a;

	printf("O valor de L" /n );
	scanf("%i", &l);

	a = l*l

	printf("Valor de a: %i/n", a);
	return 0;


}

/* 2 c)
*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
	int a, l , h;

	printf("O valor de L" /n);
	printf("%s\n", );
}

/* 2 d)
*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define PI = 3.14
{
int main ()
{
	float area, comprimento, raio;
	printf("Insira o raio" /n);
	scanf ("%f",&raio);
	area = PI * Math.pow(R,2);
	comprimento = 2 * PI * raio;

	printf("Area é %.2f/n Comprimento é %.2f/n", area, comprimento );


}
return 0;
}

/* 2 e)
*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main ()
{
	int massa;
	float altura, IMC;

	printf ("massa " /n);
	scanf ("%i", &massa);

	printf ("altura" /n);
	scanf ("%f", &altura); 
	IMC = massa/ math.pow(altura, 2);


}

/* 2 f)
*/
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

{
int main ()
{
	int numerohoras; float ganhohoras, salbruto, INSS, sind, salliq, imprenda;

	printf("Quanto é o seu salário?" /n)
	scanf ("%f", &ganhohoras);

	printf("Quantas horas você trabalha?", /n)
	scanf ("%i", &numerohoras);

	salbruto = ganhohoras * numerohoras;
	INSS = salbruto * 0.08;
	sind = salbruto * 0.05;
	imprenda = salbruto * 0.11;
	salliq = salbruto - INSS - sind - imprenda;

	printf (" Seu salário é %f/n INSS: %f/n Sindicato: %f/n Merreca: %f/n", salbruto, INSS, sind, salliq);

	return 0;

}








}



