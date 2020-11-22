
package dao.JDBC;


/**
 *
 * @author Sullyvan Marks
 */

import Tools.DAOBaseJDBC;
import dao.Interface.CursoDAO;
import modelo.Curso;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class CursoDAOJDBC extends DAOBaseJDBC implements CursoDAO {
    
    public CursoDAOJDBC() throws ClassNotFoundException, SQLException {
    }
    
    
    
    @Override
    public boolean salvar(Curso curso) {
        PreparedStatement stmt = null;
        try {  
            stmt = conn.prepareStatement(
                    "INSERT INTO curso(nome,ementa,cargaHoraria) VALUES(?,?,?)");
            stmt.setString(1, curso.getNome());
            stmt.setString(2, curso.getEmenta());
            stmt.setString(3, curso.getCargaHoraria());
            stmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Erro SQL: " + e.getMessage());
            return false;
        }
        finally{
            try{stmt.close();} 
            catch (SQLException ex) { System.out.println("Erro Close()");}
        }
        return true;
    }
    
    
    
    

    @Override
    public Curso consultarNome(String nome) {
        Curso cursoLido = null;
        PreparedStatement stmt = null;
        
        try {
            stmt = conn.prepareStatement(
                    "SELECT * FROM Curso WHERE nome = ?");
            stmt.setString(1,nome);
            
            ResultSet rset = stmt.executeQuery();
            if(rset.next()){
                cursoLido = new Curso();
                cursoLido.setId(rset.getLong("id"));
                cursoLido.setNome(rset.getString("nome"));
                cursoLido.setEmenta(rset.getString("ementa"));
                cursoLido.setCargaHoraria(rset.getString("cargaHoraria"));
                stmt.close();
            }
            else{
                return null;
            }
            
            
            
        } catch (SQLException ex) {
            System.out.println("Falha na consulta: " + ex.getMessage());
            return null;
        }     
        return cursoLido;
    }

    @Override
    public Curso consultarId(Long id) {
        Curso cursoLido = null;
        PreparedStatement stmt = null;
        
        try {
            stmt = conn.prepareStatement(
                    "SELECT * FROM Curso WHERE id = ?");
            stmt.setLong(1,id);
            ResultSet rset = stmt.executeQuery();
            if(rset.next()){
                cursoLido = new Curso();
                cursoLido.setNome(rset.getString("nome"));
                stmt.close();
            }
            else{
                return null;
            }
                   
        } catch (SQLException ex) {
            System.out.println("Falha na consulta: " + ex.getMessage());
            return null;
        }     
        return cursoLido;
    }

    public int Max() throws SQLException {
        int max;
        PreparedStatement pstm = null;
        String sql01 = "SELECT COUNT(id) FROM Curso";
        pstm = conn.prepareStatement(sql01);
        ResultSet rs = pstm.executeQuery();
        rs.next();
        max = rs.getInt(1);   
        return max ;    
    }

    public List<Curso> consultar(String nome) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
