/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author sullyvan Marks
 */

let vet1 = Array();
let vet2 = Array();
let numero = Number();


//01) criar dois vetores de numeros usando uma arrow function.
let parEimpar = limite => {
  //Para tal fazer a funcao recebe como parametro a (quantidade)
  //quantidade: quantos numeros devem ser gerados 
  for (let i = 0; i < limite; i++) {
    numero = Math.trunc(Math.random() * (100 - 1) + 1);
    numero % 2 == 0 ? vet1.push(numero) : vet2.push(numero);
    
  }

  //e retorna dois vetores com a mesma quantidade de pares e impares: (vetor de vetor)
  return (globalArray = [vet1, vet2]);
};
console.log(parEimpar(10));

// 01.1) criar dois vetores de numeros usando uma arrow function.
let ParEimpar2 = Limite => {
  //Para tal fazer a funcao recebe como parametro a (quantidade)
  //quantidade: quantos numeros devem ser gerados 
  for (let i = 0; i < Limite; i++) {
    numero = Math.trunc(Math.random() * (100 - 1) + 1);
    numero % 2 == 0 ? vet1.push(numero) : vet2.push(numero);
  }

  // usando desestruturacao na leitura dos valores retornados
  return {
    array1: vet1,
    array2: vet2
  };
};


console.log(ParEimpar2(10));

//02) ler para 4 variaveis: os tres primeiros valores do vetor de pares

let Ler4 = (vet1 = [], vet1Cont) => { //*****************  verificar possível erro no código 
  let novoarr = [];

  for (let i = 3; i < vet1Cont; i++) novoarr.push(vet1[i]);

  let [v1, v2, v3, v4] = [
    //os tres primeiros valores do vetor de pares
    vet1[0],
    vet1[1],
    vet1[2],
    // e na quarta variavel o resto do vetor
    [...novoarr]
  ];
  
  return {
    //Desestruturação
    DesestArray: {
      V1: v1,
      V2: v2,
      V3: v3,
      V4: v4
    }
  };
};
console.log(
  Ler4(

    //Os vetores de pares
    ParEimpar2().array1,
    ParEimpar2().array1.length
  )
);

// 03)
  //ler para 3 variaveis: os dois primeiros valores do vetor de impares
let Ler3 = (vet2 = []) => { //*****************  verificar possível erro no código 
  let novoarr = [];

  for (let i = 3; i < 7; i++) novoarr.push(vet2[i]);

  let [v1, v2, v3] = [
    vet2[0],
    vet2[1],

  // e na terceira variavel o resto do vetor
    [...novoarr]
  ];

  return {
    // Desestruturação
    DesestArray: {
      V1: v1,
      V2: v2,
      V3: v3
    }
  };
};
console.log(
  Ler3(
    ParEimpar2().array2,
    ParEimpar2().array2.length
  )
);

// 04)
let GerarVetor = () => {
  let NovoArr = [
    Ler4(
      ParEimpar2().array1,
      ParEimpar2().array1.length
    ).DesestArray.v4,
    Ler3(
      ParEimpar2().array2,
      ParEimpar2().array2.length
    ).DesestArray.v3
  ];

  return {
    novoarr: NovoArr
  };
};
console.log(GerarVetor());

//05) setar quatro variaveis com um valor string
let AlterarString = (Nome1, Nome2, Nome3, Nome4) => {
    let original = [Nome1, Nome2, Nome3, Nome4]

    
    Nome1 = Nome2
    Nome2 = Nome3
    Nome3 = Nome4
    Nome4 = Nome1

    let Alterado = [Nome1, Nome2, Nome3, Nome4]

    return {
        Original: original,
        alterado: Alterado
    }
}
console.log(AlterarString('Tiago', 'Lucas', 'Mateus', 'Sullyvan'))

// 06) Criar um objeto com 5 atributos, sendo um deles um outro objeto
let Criar = () => {

  
    let Computador = {
        marca: 'Asus',
        Placa: 'ASRock Gamer Motherboard',
        RAM: '16 GB DDR4',
        Processador: {
            velocidade: '4,30 GHz 8x',
            Marca: { nome: 'AMD'},
            Modelo: { nome: 'A4 -7300 with Radeon HD Graphics' }
        },
        ArmInterno: {
            Tipo: 'HDD',
            Marca: 'Seagate' ,
            Tamanho: '1 TB'
        }
    }
   //criar uma funcao que ira imprimir os 2 atributos do obejto acima: um deles
    return {
        processador: Computador.Processador,
        Armazenamento: Computador.ArmInterno
    }
}

console.log(Criar())