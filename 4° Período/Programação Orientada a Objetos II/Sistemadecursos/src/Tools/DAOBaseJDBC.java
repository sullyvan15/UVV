
package Tools;

/**
 *
 * @author Sullyvan Marks
 */
 
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DAOBaseJDBC {
    protected static Connection conn;
    
    public DAOBaseJDBC() throws ClassNotFoundException, SQLException{
        Class.forName(Config.NOME_DRIVER);       
        conn = DriverManager.getConnection(Config.BD_URL,Config.BD_LOGIN,Config.BD_PASS);
    }
    
}
