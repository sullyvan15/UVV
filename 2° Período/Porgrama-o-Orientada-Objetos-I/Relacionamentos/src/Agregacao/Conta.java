/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Agregacao;


/**
 *
 * @author alunodev08
 */
public class Conta {
    private float saldo, limite;
    private int numeroConta;
    private Cliente titular;
    public void depositar(float valor){
        saldo =  saldo + valor;
    }
    
    public boolean sacar(float valor){
        if(saldo >= valor){
            saldo = saldo - valor;
            return true;
        }
        else
            return false;
    }
    
    public void tranferir(float valor, Conta destino){
        this.sacar(valor);
        destino.depositar(valor);
    }

    public Cliente getTitular() {
        return titular;
    }

    public void setTitular(Cliente titular) {
        this.titular = titular;
    }

    public Conta() {
        titular = new Cliente();
    }

    public Conta(float saldo, float limite, int numeroConta) {
        this();//titular = new Cliente();
        this.saldo = saldo;
        this.limite = limite;
        this.numeroConta = numeroConta;
    }
    
    
    
    public float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }

    public float getLimite() {
        return limite;
    }

    public void setLimite(float limite) {
        this.limite = limite;
    }

    public int getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(int numeroConta) {
        this.numeroConta = numeroConta;
    }
    
    
}
