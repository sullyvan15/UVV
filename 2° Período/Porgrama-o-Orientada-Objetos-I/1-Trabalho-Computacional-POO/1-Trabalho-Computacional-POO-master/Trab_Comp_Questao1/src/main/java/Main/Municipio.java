package Main;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;


/**
 *
 * @author Sullyvan
 */

public class Municipio {
    
        private String Matricula;
        private String Nome;
        private float Imposto;
        private int mesesAtraso;

        public String getMatricula() {
            return Matricula;
        }

        public void setMatricula(String matricula) {
            this.Matricula = matricula;
        }


        public String getNome() {
            return Nome;
        }

        public void setNome(String nome) {
            this.Nome = nome;
        }

    
        public float getImposto() {
            return Imposto;
        }

        public void setImposto(float imposto) {
            this.Imposto = imposto;
        }


        public int getMesesAtraso() {
            return mesesAtraso;
        }

        public void setMesesAtraso(int mesesAtraso) {
            this.mesesAtraso = mesesAtraso;
        }


            

        
            public void dados() {
             
    Scanner scannerInt = new Scanner(System.in);
    Scanner scannerFloat = new Scanner(System.in);
    Scanner scannerString = new Scanner(System.in);
                
                    
                    
    System.out.print("INSIRA A MATRICULA: ");
    String Matricula = scannerString.nextLine();
    System.out.print("INSIRA O NOME: ");
    String Nome = scannerString.nextLine();
    System.out.print("INSIRA O IMPOSTO: ");
    float Imposto = scannerFloat.nextFloat();
    System.out.print("INSIRA OS MESES EM ATRASO: ");
    int mesesAtraso = scannerInt.nextInt();
                
                        
                        
    this.setMatricula(Matricula);
    this.setNome(Nome);
    this.setImposto(Imposto);
    this.setMesesAtraso(mesesAtraso);
            }

      
        public void Multa() {
                
        dados();
               
        if (mesesAtraso > 0 && mesesAtraso <= 5) {
        Imposto = Imposto + (float) (Imposto * 0.01);
        } else if (mesesAtraso >= 6 && mesesAtraso <= 8) {
        Imposto = Imposto + (float) (Imposto * 0.023);
        } else if (mesesAtraso >= 9 && mesesAtraso <= 10) {
        Imposto = Imposto + (float) (Imposto * 0.03);
        } else if (mesesAtraso >= 11 && mesesAtraso <= 12) {
        Imposto = Imposto + (float) (Imposto * 0.054);
        } else {
        Imposto = Imposto + (float) (Imposto * 0.1);
        }
        }


        public int hashMap(int x) {
               
        Scanner scannerInt = new Scanner(System.in);
        Scanner scannerFloat = new Scanner(System.in);
            
        int escolhaIF = 0;
        int escolhaDoWhile = 0;
        int paradaDoWhile = 0;
        int i = 1;
        String Matricula;
        String Nome;

            
        do {
                       
                            
        // Criando map de matriculas
        Map<String, String> listaMatricula = new HashMap<String, String>();
                        
        do {
        // Invocando metodo de calcular multa
        Multa();
                                
        listaMatricula.put(getMatricula(), getNome());
        System.out.println("O VALOR A SER PAGO É: " + getImposto());
        System.out.println("");
        System.out.println("Cadastro [" + i + "] efetuado com sucesso!");
        System.out.println("");
        // Contador que indica o indice da matricula criada 
        i++;
        System.out.println("Deseja efetuar um novo cadastro?\n1 - SIM\n2 - NÃO");
        escolhaDoWhile = scannerInt.nextInt();
         } while (escolhaDoWhile != 2);
                            
        do {
                                    
         System.out.println("1 - EXIBIR MATRICULA\n2 - EXIBIR MATRICULA E NOME\n0 - FINALIZAR BUSCA");
         escolhaIF = scannerInt.nextInt();
                                    
        if (escolhaIF == 1) {
        for (String key : listaMatricula.values()) {
        System.out.println("MATRICULA: " + key);
        }
        } else if (escolhaIF == 2) {
        for (Map.Entry<String, String> entry : listaMatricula.entrySet()) {
        System.out.println("MATRICULA: " + entry.getKey() + " | NOME: " + entry.getValue());
        }
        }
        } while (escolhaIF != 0);
        System.out.println("Deseja começar novamente?\n1 - SIM\n0 - NÃO");
        paradaDoWhile = scannerInt.nextInt();

        if (paradaDoWhile == 0){
        System.out.println("Encerrando");
        } else {
        return hashMap(x);
                                    }
        } while (paradaDoWhile != 0);
        return x;
        }

} 
