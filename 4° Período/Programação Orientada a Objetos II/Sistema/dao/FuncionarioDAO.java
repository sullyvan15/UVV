/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import modelo.Funcionario;


public interface FuncionarioDAO {
    public boolean salvar(Funcionario funcionario);
    public Funcionario consultar(String nome);
    
}
