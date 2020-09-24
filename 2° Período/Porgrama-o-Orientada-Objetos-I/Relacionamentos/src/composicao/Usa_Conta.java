/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package composicao;

/**
 *
 * @author alunodev08
 */
public class Usa_Conta {

    public static void main(String[] args) {
        
        cc.getTitular().setNome("Mantra");
        cc.getTitular().setEndereco("Mora na UVV");
        cc.getTitular().setCpf("987456321");

        System.out.println("Nome do cliente "
                + cc.getTitular().getNome());

        Conta cc = new Conta(500, 1000, 123321);
        
        
        
        System.out.println("Quem é o titular CC? "
                + cc.getTitular().getNome());

        System.out.println("Antes: " + cc.getSaldo());
        cc.depositar(50);
        System.out.println("Depois: " + cc.getSaldo());
        if (cc.sacar(40)) {
            System.out.println("Saque com sucesso..");
            System.out.println("Saldo: " + cc.getSaldo());
        } else {
            System.out.println("Saldo insuficiente...");
        }

        Conta cc2 = new Conta(100, 520, 321123);
        System.out.println("Antes - Saldo CC2: " + cc2.getSaldo());
        cc.tranferir(20, cc2);
        System.out.println("Depois - Saldo CC1: " + cc2.getSaldo());
        System.out.println("Depois - Saldo CC2: " + cc2.getSaldo());

    }

}
