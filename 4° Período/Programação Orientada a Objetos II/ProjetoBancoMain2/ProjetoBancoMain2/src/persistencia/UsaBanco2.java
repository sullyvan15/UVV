package persistencia;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


/**
 *
 * @author alunolab07
 */
public class UsaBanco2 {
    
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Class.forName("org.hsqldb.jdbcDriver");
        Connection con = DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/javadiscos", "sa", "");
        
        String sql = "INSERT INTO Artista (nome, banda, pais) VALUES (?, ?, ?)";
        PreparedStatement pstm = con.prepareStatement(sql);
        pstm.setString(1, "Pancadão Prepared");
        pstm.setBoolean(2, false);
        pstm.setString(3, "BRAZIL");
        pstm.executeUpdate();
        
        
        String sql2 = "select * from ARTISTA";
        PreparedStatement pstm2 = con.prepareStatement(sql2);
        ResultSet rs = pstm2.executeQuery();
        while(rs.next()){
            System.out.println(rs.getInt("id") + " / " + 
                               rs.getString("nome") + " / " +
                               rs.getBoolean("banda") + " / " +                               
                               rs.getString("pais"));
        }
        
        pstm.close();
        pstm2.close();
        con.close();
    }
    
}
