/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import modelo.Autor;
import modelo.Livro;
import tools.DAOBaseJDBC;

/**
 *
 * @author alunolab07
 */
public class LivroDAOJDBC extends DAOBaseJDBC implements LivroDAO{

    public LivroDAOJDBC() throws ClassNotFoundException, SQLException {
    }

    @Override
    public boolean salvar(Livro livro) {
        
        PreparedStatement pstm;
        String sql = "INSERT INTO Livro (titulo) VALUES (?)";
        
        try {
            con.setAutoCommit(false);
            
            pstm = con.prepareStatement(sql);
            pstm.setString(1, livro.getTitulo());
            pstm.executeUpdate();   
            
            this.gravarAutor(livro);
            
            con.commit();
            
        } catch (SQLException ex) {
            Logger.getLogger(AutorDAOJDBC.class.getName()).log(Level.SEVERE, null, ex);
            try {
                con.rollback();
                con.setAutoCommit(true);
            } catch (SQLException ex1) {
                Logger.getLogger(LivroDAOJDBC.class.getName()).log(Level.SEVERE, null, ex1);
            }
        }          
        
        return true;
        
    }
    
    private void gravarAutor(Livro l) throws SQLException{
       String sql1 = "select max(idLivro) from Livro";
       String sql2 = "update Autor set Livro_idLivro = ? where idAutor = ?";
       
       PreparedStatement pstm = null;

       Integer idLivroRecuperado;
       pstm = con.prepareStatement(sql1);
       ResultSet rs = pstm.executeQuery();  
       rs.next();
       idLivroRecuperado = rs.getInt(1);
       
       pstm = con.prepareStatement(sql2);
       pstm.setInt(1, idLivroRecuperado);
       Autor autor = l.getAutor();
       pstm.setInt(2, autor.getId());
       
       pstm.executeUpdate();   
    }
}
