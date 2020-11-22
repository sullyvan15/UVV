
package Controllers;


/**
 *
 * @author Sullyvan Marks
 */

import dao.JDBC.CursoDAOJDBC;
import modelo.Curso;
import java.sql.SQLException;
import java.util.List;

public class cursoontroller {
    CursoDAOJDBC conn = null;
   
    public cursoontroller() throws ClassNotFoundException, SQLException {
        this.conn = new CursoDAOJDBC();
    }
    
    public boolean salvar(Curso curso) {
        if(conn.salvar(curso)){
            return true;
        } else {
            return false;
        }
    }
    
    public List<Curso> consultar(String nome){
        return this.conn.consultar(nome);
    }
}
