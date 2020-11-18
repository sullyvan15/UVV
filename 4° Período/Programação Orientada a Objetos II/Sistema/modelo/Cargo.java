/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import java.util.ArrayList;
import java.util.List;


public class Cargo {
    private Integer id;
    private String NomeCargo;    

    private List<Funcionario> ListaFuncionarios;

    public void adicionarFuncionarios(Funcionario a){
        ListaFuncionarios.add(a);
    }
    
    public Cargo() {
        ListaFuncionarios = new ArrayList<>();
    }

    public Cargo(Integer id, String NomeCargo) {
        this();
        this.id = id;
        this.NomeCargo = NomeCargo;
    }

    public List<Funcionario> getListaFuncionarios() {
        return ListaFuncionarios;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeCargo() {
        return NomeCargo;
    }

    public void setNomeCargo(String NomeCargo) {
        this.NomeCargo = NomeCargo;
    }


    
    
    
}
