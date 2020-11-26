%Base de dados

carro(C):- esportivo(C).
carro(C):- caminhonete(C).
carro(C):- compacto(C).
carro(C):- suv(C).
carro(C):- montadora(C).

esportivo(jipe).
esportivo(veloster).
caminhonete(hilux).
caminhonete(saveiro).
caminhonete(picape).
compacto(fusca).
suv(ecosporting).
suv(suv_ix35).

montadora(ferrari).
montadora(troller).

marca(jipe, jeep).
marca(veloster, hyundai).
marca(suv_ix35, hyundai).
marca(hilux, toyota).
marca(saveiro,wolkswagen).
marca(fusca,wolkswagen).
marca(ecosporting, ford).

luxo(ferrari).
luxo(hilux).

classico(fusca).
classico(jipe).
classico(ferrari).

classe_carro(picape).

%regras

e_uma_montadora(C):- carro(C), montadora(C).
mesma_marca(X,Y):- carro(X), marca(X,Y).
classe(C):- carro(C), classe_carro(C).
tracionado(C):- carro(C), caminhonete(C); suv(C).
carros_luxo(C):- carro(C), luxo(C).
carros_classicos(C):- carro(C), classico(C).
classico_luxo(C):- carro(C), luxo(C), classico(C).

Consultas:
mesma_marca(saveiro,toyota). // Mostra que o Saveiro não foi montado pela Toyota.

e_uma_montadora(ferrari). // Mostra que uma ferrari é uma montadora.

mesma_marca(X,hyundai). // Mostra os carros da montadora Hyundai.

classe(X). // Mostra as classes cadastradas.

tracionado(X). // Mostra os carros tracionados.

mesma_marca(fusca,X). // Verifica a marca do fusca.

carros_luxo(ferrari). // Verifica se a Ferrari é um carro de luxo.

carros_luxo(fusca). // Verifica se um fusca é um carro de luxo.

carros_classicos(hilux). // Mostra que a Hilux não é um carro clássico.

classico_luxo(X). // Mostra quais carros são clássicos e de luxo.
