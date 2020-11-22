
package dao.JDBC;

/**
 *
 * @author Sullyvan Marks
 */


import Tools.DAOBaseJDBC;
import modelo.Oferta;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.lang.Long;
import modelo.Curso;
import dao.Interface.OfertaDAO;
import java.util.List;
public class OfertaDAOJDBC extends DAOBaseJDBC implements OfertaDAO {
    
    public OfertaDAOJDBC() throws ClassNotFoundException, SQLException {
    }
    
    @Override
    public boolean salvar(Oferta oferta) {
        PreparedStatement stmt = null;
        try {  
            stmt = conn.prepareStatement(
                    "INSERT INTO Oferta(dataInicial,dataFinal,status,curso_id,instrutor_id) VALUES(?,?,?,?)");
            stmt.setString(1, oferta.getDataInicial());
            stmt.setString(2, oferta.getDataFinal());
            stmt.setInt(3, oferta.getStatus());
            stmt.setLong(4, oferta.getCurso());
            stmt.setLong(5, oferta.getInstrutor());
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
    public Oferta consultarId(Long id) {
        Oferta ofertaLida = null;
        PreparedStatement stmt = null;
        
        try {
            stmt = conn.prepareStatement(
                    "SELECT * FROM Oferta WHERE id = ?");
            stmt.setLong(1, id);
            
            ResultSet rset = stmt.executeQuery();
            if(rset.next()){
                ofertaLida = new Oferta();
                ofertaLida.setId(rset.getLong("id"));
                ofertaLida.setDataInicial(rset.getString("dataInicial"));
                ofertaLida.setDataFinal(rset.getString("dataFinal"));
                ofertaLida.setStatus(rset.getInt("status"));
                ofertaLida.setCurso(rset.getLong("curso_id"));
                ofertaLida.setInstrutor(rset.getLong("instrutor_id"));
                stmt.close();
            }
            else{
                return null;
            }          
            
        } catch (SQLException ex) {
            System.out.println("Falha na consulta: " + ex.getMessage());
            return null;
        }     
        return ofertaLida;
    }

    public int Max() throws SQLException {
        int max;
        PreparedStatement pstm = null;
        String sql01 = "SELECT COUNT(id) FROM Oferta";
        pstm = conn.prepareStatement(sql01);
        ResultSet rs = pstm.executeQuery();
        rs.next();
        max = rs.getInt(1);   
        return max ;    
    }

    public List<Oferta> consultar(String situacaoOferta) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
