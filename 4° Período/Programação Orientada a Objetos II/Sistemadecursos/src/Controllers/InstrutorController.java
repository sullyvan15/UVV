
package Controllers;

/**
 *
 * @author Sullyvan Marks
 */

import dao.JDBC.InstrutorDAOJDBC;
import modelo.Instrutor;


import java.sql.SQLException;
import java.util.List;

public class InstrutorController {
    InstrutorDAOJDBC conn = null;
    
    public InstrutorController() throws ClassNotFoundException, SQLException {
        this.conn = new InstrutorDAOJDBC();
    }
    
    public Boolean salvar(Instrutor instrutor) {
        return conn.salvar(instrutor);
    }
    
    public List<Instrutor> consultar(String nome){
        return this.conn.consultar(nome);
    }
    
}
