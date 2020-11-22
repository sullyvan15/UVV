/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controle;

import dao.AutorDAO;
import dao.AutorDAOJDBC;
import java.sql.SQLException;
import modelo.Autor;

/**
 *
 * @author alunolab07
 */
public class ControleGestao {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        
        Autor a1 = new Autor();
        a1.setNome("Vinicius");
        
        AutorDAO dao = new AutorDAOJDBC();
        
        dao.salvar(a1);
        
        
        
    }
    
}
