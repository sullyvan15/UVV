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
        
        AutorDAO daoA = new AutorDAOJDBC();

        Autor a1 = new Autor();
        a1.setNome("Rosalen");
//        daoA.salvar(a1);

        Autor a2 = new Autor();
        a2.setNome("Vinicius");
//        daoA.salvar(a2);

        Autor a3 = new Autor();
        a3.setNome("Silva");
//        daoA.salvar(a3);
        
        
       
        Livro l1 = new Livro();
        l1.setTitulo("Programação com Café");
//      //daoA.consultar("Rosalen");  => id = 2
        a1.setId(1);
        a3.setId(3);
//      l1.setAutor(a1);
        l1.adicionarAutor(a1);
        l1.adicionarAutor(a3);
        LivroDAO daoL = new LivroDAOJDBC();
        daoL.salvar(l1);
        
    }
}
