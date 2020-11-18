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
import modelo.Funcionario;
import tools.DAOBaseJDBC;


public class FuncionarioDAOJDBC extends DAOBaseJDBC implements FuncionarioDAO{

    public FuncionarioDAOJDBC() throws ClassNotFoundException, SQLException {
    }

    @Override
    public boolean salvar(Funcionario Funcionario) {

        PreparedStatement pstm;
        String sql = "INSERT INTO Funcionario (nome) VALUES (?)";
        
        try {
            pstm = con.prepareStatement(sql);
            pstm.setString(1, Funcionario.getNome());
            pstm.executeUpdate();   
            
        } catch (SQLException ex) {
            Logger.getLogger(FuncionarioDAOJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }        
        
        return true;
        
    }

    @Override
    public Funcionario consultar(String nome) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
