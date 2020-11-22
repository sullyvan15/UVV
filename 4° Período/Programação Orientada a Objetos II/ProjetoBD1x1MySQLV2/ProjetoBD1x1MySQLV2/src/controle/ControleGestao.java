/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controle;

import dao.AutorDAO;
import dao.AutorDAOJDBC;
import dao.LivroDAO;
import dao.LivroDAOJDBC;
import java.sql.SQLException;
import modelo.Autor;
import modelo.Livro;

/**
 *
 * @author alunolab07
 */
public class ControleGestao {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        
        Autor a1 = new Autor();
        a1.setNome("Rosalen");
        AutorDAO daoA = new AutorDAOJDBC();
        daoA.salvar(a1);
        
        Livro l1 = new Livro();
        l1.setTitulo("Programação com Café");
        //daoA.consultar("Rosalen");  => id = 2
        a1.setId(2);
        l1.setAutor(a1);
        LivroDAO daoL = new LivroDAOJDBC();
        daoL.salvar(l1);
        
    }
}
