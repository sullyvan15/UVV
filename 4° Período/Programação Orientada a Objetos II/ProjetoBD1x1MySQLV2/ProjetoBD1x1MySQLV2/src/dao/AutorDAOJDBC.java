/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import modelo.Autor;
import tools.DAOBaseJDBC;

/**
 *
 * @author alunolab07
 */
public class AutorDAOJDBC extends DAOBaseJDBC implements AutorDAO{

    public AutorDAOJDBC() throws ClassNotFoundException, SQLException {
    }

    @Override
    public boolean salvar(Autor autor) {

        PreparedStatement pstm;
        String sql = "INSERT INTO Autor (nome) VALUES (?)";
        
        try {
            pstm = con.prepareStatement(sql);
            pstm.setString(1, autor.getNome());
            pstm.executeUpdate();   
            
        } catch (SQLException ex) {
            Logger.getLogger(AutorDAOJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }        
        
        return true;
        
    }

    @Override
    public Autor consultar(String nome) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
