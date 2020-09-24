/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Colecao;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author alunodev10
 */
public class Usa_Colecao {
    
    public static void main(String[] args) {
        
         List<String> x = new ArrayList();  
    
    x.add("Eu");
    x.add("Vcs");
    x.add("I_Eu");
    
        System.out.println("O elemento 0 é: " + x.get(0));
        System.out.println("O elemento 1 é: " + x.get(1));
        
        //int i;
        // for(i = 0; i<x.size()>; i++){}
       for(String item: x){
           System.out.println(item);
       }
    
    }
     
}
