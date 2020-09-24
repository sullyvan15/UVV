/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package aula01;

import java.util.Scanner;

/**
 *
 * @author alunodev10
 */
public class JogoDoAdvinha {
    public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int numeroSecreto = 10;
            int chute = 0;
            int tentativas = 0;
            
            while ( (numeroSecreto != chute) && (tentativas <3) ){
                System.out.println("Digite o seu chute aí: ");
                chute = sc.nextInt();
                tentativas = tentativas + 1;
                
                if (tentativas == 2){
                    System.out.println("Chuta um numero entre 1-10");
                }
            }    
            
            if(numeroSecreto == chute){
                System.out.println("Vc acertou...");
            }
            else {
                System.out.println("Vc errou AHAHAHAHAH");
            }
            
            
            

    }
    
}
