// Escrever um algoritmo em C para exibir os múltiplos de 3 compreendidos no intervalo: [3
100].
int main()
{
 int contador;
 printf("Os multiplos de 3 que estao no intervalo entre 3 e 100 sao: \n\n");
 for (contador=3;contador<=100;contador++)
 {
 if (contador % 3 == 0)
 printf("%i\n", contador);
 }
 return 0;
}




//Escrever um algoritmo em C para exibir os múltiplos de 11, em ordem decrescente, compreendidos entre o intervalo: [300 400]
int main()
{
 int contador;
 printf("Os multiplos de 11 na ordem decrescente no intervalo de 300 a 400 sao: \n\n");
 for (contador=400;contador>300;contador--)
 if (contador % 11 == 0)
 printf("%i\n", contador);
 return 0;
}


//Escrever um algoritmo em C para exibir os múltiplos de ƞ compreendidos entre o intervalo: [limite inferior, limite superior] ϵ aos naturais. Sendo que: * {ƞ ∈ ℕ/ ƞ ≥ 2} * {limite inferior, limite superior ∈ ℕ / limite inferior ≥ limite superior}
int main()
{
 int n, li, ls, contador;
 printf ("Digite um numero inteiro positivo (numero >=2): ");
 scanf("%i", &n);
 printf("\nDigite o valor do limite inferior: ");
 scanf("%i", &li);
 printf("\nDigite o valor do limite superior: ");
 scanf("%i", &ls);
 printf("\n");
 if (n <= 1 || li < 0 || ls < 0 || li > ls)
 printf("Valor incorreto. Tente novamente\n");
 else
 {
 printf("\nOs numeros de %i entre [%i, %i] sao:\n\n", n, li, ls);
 for (contador=li;contador<=ls;contador++)
 {
 if (contador % n == 0)
 printf("%i\n", contador);
 }
 }
return 0;
}
Faça um algoritmo que exiba separadamente os PARES e ÍMPARES compreendidos entre [0
100]
int main()
{
 int contador;
 printf("Os numeros PARES e IMPARES no intervalo de 0 a 100 sao:\n\n");
 for (contador=1;contador<=100;contador++)
 {
 if(contador % 2 == 0)
 printf("PAR: %i\n", contador);
 else
 printf("IMPAR: %i\n", contador);
 }
 return 0;
}


//Escreva um algoritmo em C que leia de 10.000 habitantes de uma pequena cidade se está empregado ou não e exiba em porcentagem a quantidade de empregados e desempregados desta pequena cidade
int main()
{
 int opcao,habitantes=0,empregado=0,desempregado=0;
while (habitantes<10000)
{
 printf("Escolha uma opcao para o %i habitante: [1] empregado - [2] desempregado: ",
habitantes + 1);
 scanf("%i", &opcao);
 if (opcao != 1 && opcao != 2)
 printf("Opcao incorreta, TENTE NOVAMENTE.\n");
 else
 {
 if (opcao == 1)
 empregado = empregado + 1;
 else if (opcao == 2)
 desempregado = desempregado + 1;
 habitantes = habitantes + 1;
 }
 }
 printf("\nPorcentagem de empregados: %.2f\n", 100.0*empregado/habitantes);
 printf("Porcentagem de desempregados: %.2f\n", 100.0*desempregado/habitantes);
 return 0;
}


/*Escreva um algoritmo em C que leia o salário em reais (∈ ℝ) de 1000 clientes de um shopping e exiba em porcentagem a divisão dos clientes por tipo (A, B ou C), conforme a seguir:
- A: Maior ou igual a R$ 15.000
- B: Menor que R$ 15.000 e maior ou igual a R$ 5.000
- C: Menor que R$ 5.000*/
int main()
{
 float salario;
int a = 0, b = 0, c = 0, clientes = 0;
while(clientes < 5)
{
 printf("Digite o salario do cliente: ");
 scanf("%f", &salario);
{
 if (salario <= 0)
 printf("Valor incorreto, tente novamente.\n");
}
 if (salario < 15000 && salario >= 5000)
 b = b + 1;
 else if (salario >= 15000)
a = a + 1;
else
c = c + 1;
clientes = clientes + 1;
 }
 printf("Porcentagem de clientes da Classe A: %.2f\n", a * 100.0 / clientes);
 printf("Porcentagem de clientes da Classe B: %.2f\n", b * 100.0 / clientes);
 printf("Porcentagem de clientes da Classe C: %.2f\n", c * 100.0 / clientes);
 return 0;
}


/*Escrever um algoritmo em C que efetue a soma de todos os números ímpares que são
múltiplos de três e que se encontram no intervalo [9 900].*/
int main()
{
 int contador, soma=0;
 printf("Os IMPARES e MULTIPLOS de 3 que estao no intervalo [9, 900] sao:\n\n");
 for (contador=9;contador<=900;contador++)
 {
 if (contador % 2 != 0 && contador % 3 == 0)
 {
 printf("%i\n", contador);
 soma = soma + contador;
 }
 }
 printf("\nA soma de todos os IMPARES que sao multiplos de 3 e: %i", soma);
 printf("\n\n");
 return 0;
}


/*Um marca de sucos que saber a opinião dos seus clientes sobre três diferentes novos “mix”
de sabores. As degustações e votação se realizaram num supermercado durante certo
período. Faça um algoritmo em C, que exiba a porcentagem dos clientes que gostaram da
opção: 1: Mix1, 2: Mix2 ou 3: Mix3. Pare o algoritmo quando for digitada a opção zero (0).*/
int main()
{
 int mix1=0, mix2=0, mix3=0, op;
 do
 {
 printf("Escolha dentre as opcoes: [1] mix1 [2] mix2 [3] mix3 ou [0] PARAR: ");
 scanf("%i",&op);
 {
 if(op == 1)
 mix1 = mix1 + 1;
 else if(op == 2)
 mix2 = mix2 + 1;
 else if(op == 3)
 mix3 = mix3 + 1;
 }
 }
 while(op!=0);
 printf("\nPorcentagem: Mix1: %.2f", (mix1*100.0)/(mix1+mix2+mix3));
 printf("\nPorcentagem: Mix2: %.2f", (mix2*100.0)/(mix1+mix2+mix3));
 printf("\nPorcentagem: Mix3: %.2f", (mix3*100.0)/(mix1+mix2+mix3));
 printf("\n");
 return 0;
}



/*Escrever um algoritmo em C para exibir os números que, no intervalo entre [2000 2300],
divididos por 11 possuem resto 5. Exiba na tela também, a média da soma destes números*/
int main()
{
 int contador, soma=0, quantidade=0;
 for(contador=2000;contador<=2300;contador++)
 {
 if(contador % 11 == 5)
 {
 printf("Divisivel por 11 com resto 5: %i \n", contador);
 soma = soma + contador;
 quantidade++;
 }
 }
 printf("\nSoma dos divisiveis por 11 com resto 5: %i", soma);
 printf("\nQuantidade total contada dos divisiveis por 11 com resto 5: %i", quantidade);
 printf("\nMedia da soma dos divisiveis por 11 com resto 5: %i", soma/quantidade);
 printf("\n");
 return 0;
}


/*Escrever um algoritmo em C para exibir os números que, no intervalo entre [2000 2300],
divididos por 11 possuem resto 5. Exiba na tela também, a média da soma destes números*/
int main()
{
 int contador, soma=0, quantidade=0;
 for(contador=2000;contador<=2300;contador++)
 {
 if(contador % 11 == 5)
 {
 printf("Divisivel por 11 com resto 5: %i \n", contador);
 soma = soma + contador;
 quantidade++;
 }
 }
 printf("\nSoma dos divisiveis por 11 com resto 5: %i", soma);
 printf("\nQuantidade total contada dos divisiveis por 11 com resto 5: %i", quantidade);
 printf("\nMedia da soma dos divisiveis por 11 com resto 5: %i", soma/quantidade);
 printf("\n");
 return 0;
}


/*Os comerciantes das Praias de Vila-Velha querem saber a temperatura média do verão
capixaba. Escreva um algoritmo em C que leia a temperatura diária no verão e exiba a
temperatura média da estação parando o algoritmo quando for digitada uma temperatura
fora da estação. Sabe-se que as temperaturas na estação de verão variam de 28 a 42 °C.*/
int main()
{
 float temperatura, soma=0, media;
 int total=0;
 do
 {
 printf("Digite a temperatura diaria: ");
 scanf("%f",&temperatura);
 if(temperatura >= 28 && temperatura <= 42)
 {
 soma+=temperatura;
 total++;
 }
 }
 while(temperatura >= 28 && temperatura <= 42);
 media = soma / total;
 printf("\nA temperatura media da estacao e: %.2f", media);
 printf("\n");
 return 0;
}

/*Escrever um algoritmo em C que faça a Potenciação (BASE elevado EXPOENTE). Ou seja, O
usuário informa a base (b) e expoente (e), sendo que:
* {b ∈ ℕ / b > 0}
* {e ∈ ℕ / e > 0}*/
int main()
{
 int base, expoente, potencia=1, contador;
 printf("Digite a base: ");
 scanf("%i",&base);
 printf("Digite o expoente: ");
 scanf("%i",&expoente);
 if(base > 0 && expoente > 0)
 {
 for(contador=0;contador<expoente;contador++)
 potencia = potencia * base;
 printf("\nPotenciacao: %i", potencia);
 }
 else
 printf("Valores incorretos. Tente novamente.");
 printf("\n");
 return 0;
}


/*Escrever um algoritmo em C, para cada item a seguir, que leia a altura em metros e o sexo
(M: para Masculino ou F: para Feminino) de 50 pessoas. Este algoritmo deverá mostrar na
tela:
a) A altura da pessoa mais alta por sexo.*/
int main()
{
 float altura, maiorm=0, maiorf=0;
 char sexo;
 int contador;
 for(contador=0;contador<3;contador++)
 {
 printf("Digite altura em metros: ");
 scanf("%f",&altura);
 printf("Digite sexo: [M] para Masculino ou [F] para Feminino: ");
 scanf("\n%c",&sexo);
 if(altura > maiorm && sexo == 'M')
 maiorm = altura;
 if(altura > maiorf && sexo == 'F')
 maiorf = altura;
 }
 printf("\n* Maior altura *\n");
 printf("\nHomem: %.2f", maiorm);
 printf("\nMulher: %.2f", maiorf);
 printf("\n");
 return 0;
}


/*Escrever um algoritmo em C, para cada item a seguir, que leia a altura em metros e o sexo
(M: para Masculino ou F: para Feminino) de 50 pessoas. Este algoritmo deverá mostrar na
tela:
b) Média da altura dos homens e das mulheres.*/
int main()
{
 float altura, mediam=0, mediaf=0;
 char sexo;
 int contador, totalm=0;
 for(contador=0;contador<5;contador++)
 {
 printf("Digite altura em metros: ");
 scanf("%f",&altura);
 printf("Digite o sexo: [M] para Masculino ou [F] para Feminino: ");
 scanf("\n%c",&sexo);
 if(sexo == 'M')
 {
 mediam+=altura;
 totalm++;
 }
 else if(sexo == 'F')
 mediaf+=altura;
 }
 mediam = mediam / totalm;
 mediaf = mediaf / (5-totalm);
 printf("\n* Media das alturas*\n");
 printf("\nHomem: %.2f", mediam);
 printf("\nMulher: %.2f", mediaf);
 printf("\n");
 return 0;
}





/* um algoritmo em C, para cada item a seguir, que leia a altura em metros e o sexo
(M: para Masculino ou F: para Feminino) de 50 pessoas. Este algoritmo deverá mostrar na
tela:
c) Quantidade de Homens e Mulheres, em porcentagem, com mais de 1.80 metros de
altura.*/
int main()
{
 float altura, tallm, tallf;
 char sexo;
 int contador, totalm=0, totalm2=0, totalf2=0;
 for(contador=0;contador<4;contador++)
 {
 printf("Digite altura em metros: ");
 scanf("%f",&altura);
 printf("Digite o sexo: [M] para Masculino ou [F] para Feminino: ");
 scanf("\n%c",&sexo);
 if(sexo == 'M')
 {
 totalm++;
 if(altura > 1.8)
 {
 totalm2++;
 }
 }
 else if(sexo == 'F')
 {
 if(altura > 1.8)
 totalf2++;
 }
 }
 tallm=(totalm2*100.0)/totalm;
 tallf=(totalf2*100.0)/(4-totalm);
 printf("\n* Porcentagem com mais de 1.80 metros de altura *");
 printf("\n");
 printf("\nHomem: %.1f", tallm);
 printf("\nMulher: %.1f", tallf);
 printf("\n");
 return 0;
}

/*Escrever um algoritmo em C que leia o voto de 50 eleitores de um condomínio nos
candidatos (1 ou 2 ou 0 (Nulo ou Inválido)) para síndico e exiba na tela o resultado da eleição
por candidato e os votos nulos ou inválidos. Crie um Menu de Opções para o eleitor.*/
int main()
{
 int c1=0, c2=0, nulo=0, voto, contador;
 for(contador=0;contador<50;contador++)
 {
 printf("\n* Votacao * \n\n[1] Candidato 1 - [2] Candidato 2 - [0] Nulo: ");
 scanf("%i",&voto);
 if(voto == 1)
 c1 = c1 + 1;
 else if(voto == 2)
 c2 = c2 + 1;
 else if(voto == 0)
 nulo = nulo + 1;
 }
 printf("\n\n\n* Vencedor das Eleicoes *");
 if(c1>c2)
 printf("\n\nCandidato 1 com %i votos \nVotos Nulos: %i", c1, nulo);
 else if(c2>c1)
 printf("\n\nCandidato 2 com %i votos \nVotos Nulos: %i", c2, nulo);
 else if(c2==c1)
 printf("\n\nNenhum candidato ganhou, pois houve empate. Havera segundo turno.");
 printf("\n");
 return 0;
}