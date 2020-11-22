/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Collection;
import java.util.logging.Level;
import java.util.logging.Logger;
import modelo.Artista;
import tools.DAOBaseJDBC;

/**
 *
 * @author alunolab07
 */
public class ArtistaDAOJDBC extends DAOBaseJDBC implements ArtistaDAO{

    public ArtistaDAOJDBC() throws ClassNotFoundException, SQLException {
    }

    @Override
    public void salvar(Artista artista) {
        PreparedStatement pstm;
        String sql = "INSERT INTO Artista (nome, banda, pais) VALUES (?, ?, ?)";
        
        try {
            pstm = con.prepareStatement(sql);
            pstm.setString(1, artista.getNome());
            pstm.setBoolean(2, artista.getBanda());
            pstm.setString(3, artista.getPais());
            pstm.executeUpdate();   
            
        } catch (SQLException ex) {
            Logger.getLogger(ArtistaDAOJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public void excluir(Artista artista) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Collection obterTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Artista recuperPeloNome(String nome) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
