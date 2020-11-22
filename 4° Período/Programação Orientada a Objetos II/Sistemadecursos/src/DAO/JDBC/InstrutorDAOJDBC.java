
package dao.JDBC;

/**
 *
 * @author Sullyvan Marks
 */

import Tools.DAOBaseJDBC;
import dao.Interface.InstrutorDAO;
import modelo.Instrutor;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;


public class InstrutorDAOJDBC extends DAOBaseJDBC implements InstrutorDAO {

    public InstrutorDAOJDBC() throws ClassNotFoundException, SQLException {
    }
    
    
    @Override
    public boolean salvar(Instrutor instrutor) {
        PreparedStatement stmt = null;
        try {  
            stmt = conn.prepareStatement(
                    "INSERT INTO Instrutor(nome,cpf,endereco,celular) VALUES(?,?,?,?)");
            stmt.setString(1, instrutor.getNome());
            stmt.setString(2, instrutor.getCpf());
            stmt.setString(3, instrutor.getEndereco());
            stmt.setString(4, instrutor.getCelular());
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
    public Instrutor consultarNome(String nome) {
        Instrutor instrutorLido = null;
        PreparedStatement stmt = null;
        
        try {
            stmt = conn.prepareStatement(
                    "SELECT * FROM Instrutor WHERE nome = ?");
            stmt.setString(1,nome);
            
            ResultSet rset = stmt.executeQuery();
            if(rset.next()){
                instrutorLido = new Instrutor();
                instrutorLido.setId(rset.getLong("id"));
                instrutorLido.setNome(rset.getString("nome"));
                instrutorLido.setCpf(rset.getString("cpf"));
                instrutorLido.setEndereco(rset.getString("endereco"));
                instrutorLido.setCelular(rset.getString("celular"));
                stmt.close();
            }
            else{
                return null;
            }          
            
        } catch (SQLException ex) {
            System.out.println("Falha na consulta: " + ex.getMessage());
            return null;
        }     
        return instrutorLido;
    }

    @Override
    public Instrutor consultarId(Long id) {
        Instrutor instrutorLido = null;
        PreparedStatement stmt = null;
        
        try {
            stmt = conn.prepareStatement(
                    "SELECT * FROM Instrutor WHERE id = ?");
            stmt.setLong(1,id);
            ResultSet rset = stmt.executeQuery();
            if(rset.next()){
                instrutorLido = new Instrutor();
                instrutorLido.setNome(rset.getString("nome"));
                stmt.close();
            }
            else{
                return null;
            }
                   
        } catch (SQLException ex) {
            System.out.println("Falha na consulta: " + ex.getMessage());
            return null;
        }     
        return instrutorLido;
    }
    
    public int Max() throws SQLException {
        int max;
        PreparedStatement pstm = null;
        String sql01 = "SELECT COUNT(id) FROM Instrutor";
        pstm = conn.prepareStatement(sql01);
        ResultSet rs = pstm.executeQuery();
        rs.next();
        max = rs.getInt(1);   
        return max ;    
    }

    public List<Instrutor> consultar(String nome) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
        
    
}
