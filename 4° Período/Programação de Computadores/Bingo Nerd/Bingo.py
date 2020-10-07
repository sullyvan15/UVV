import random
class bingo:
    _carton = []
    _numerosRestantes = 16
    _numerosBombo = []
    _numerosSalido = []
    _linea = False

    def __init__(self):
        self._carton = list(map(lambda x: str(x), random.sample(range(1, 100), 16)))
        self._origin = self._carton.copy()
        print(self._origin)
        self._numerosBombo = [i for i in range(1, 100)]

    def showCarton(self, origin=False):
        """
        Metodo que muestra el carton
        Si recibe origin=True, muestra el carton inicial
        """
        carton = self._origin if origin else self._carton

        for i in range(0, len(carton), 4):
            print(carton[i:i + 4])

    def getNumeroBombo(self):
        """
        Metodo que devuelve un numero del bombo
        """
        numeroPos = random.randint(0, len(self._numerosBombo) - 1)
        numero = self._numerosBombo[numeroPos]
        del self._numerosBombo[numeroPos]

        self._numerosSalido.append(numero)
        return numero

    def marcarNumero(self, numeroMarcar):
        """
        Metodo que busca si el numero esta en nuestro carton
        Devuelve True si el numero esta en nuestro carton
        """
        if numeroMarcar in self._carton:
            self._carton[self._carton.index(numeroMarcar)] = "X"
            self._numerosRestantes -= 1
            return True
        return False

    def isLinea(self):
        """
        Metodo que comprueba si tenemos una linea horizontal cubierta
        """
        if self._linea == False and list(filter(lambda x: "".join(x) == "XXXX",
                                                [self._carton[i:i + 4] for i in range(0, len(self._carton), 4)])):
            self._linea = True
            return True
        return False

    def getNumerosSalido(self):
        """
        Metodo que devuelve los numeros que han salido en el bombo
        """
        return self._numerosSalido

    def getNumerosRestantes(self):
        """
        Metodo que devuelve la cantidad de numeros restantes para llenar nuestro carton
        """
        return self._numerosRestantes


bingo = bingo()
print("Este es tu carton!!!")
bingo.showCarton()

while bingo.getNumerosRestantes() > 0:
    numeroBombo = str(bingo.getNumeroBombo())
    if bingo.marcarNumero(numeroBombo):
        print("---------------------------------------------")
        print("Tienes el numero:", numeroBombo, "/", len(bingo.getNumerosSalido()), ", te quedan:",
              bingo.getNumerosRestantes())
        bingo.showCarton()
        if bingo.isLinea():
            print("\n\n   ##### LINEA #####\n\n")
    else:
        print("han salido el numero:", numeroBombo, "/", len(bingo.getNumerosSalido()), ", te quedan:",
              bingo.getNumerosRestantes())

    time.sleep(0.5)

print("\n\n\n   ##### BINGO #####\n")
print("Este es tu carton inicial")
bingo.showCarton(True)
print("\nEstos son los", len(bingo.getNumerosSalido()), "numeros que han salido hasta completar el carton:",
      bingo.getNumerosSalido())