package persistencia;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


/**
 *
 * @author alunolab07
 */
public class UsaBanco {
    
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Class.forName("org.hsqldb.jdbcDriver");
        Connection con = DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/javadiscos", "sa", "");
        
        Statement stm = con.createStatement();
        String sql = "INSERT INTO Artista (nome, banda, pais) VALUES ('Pancadão', FALSE, 'BRAZIL')";
        stm.executeUpdate(sql);
        
        
        String sql2 = "select * from ARTISTA";
        ResultSet rs = stm.executeQuery(sql2);
        while(rs.next()){
            System.out.println(rs.getInt("id") + " / " + 
                               rs.getString("nome") + " / " +
                               rs.getBoolean("banda") + " / " +                               
                               rs.getString("pais"));
        }
        
        stm.close();
        con.close();
    }
    
}
