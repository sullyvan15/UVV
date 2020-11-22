
package Controllers;

/**
 *
 * @author Sullyvan Marks
 */ 

import dao.JDBC.OfertaDAOJDBC;
import modelo.Oferta;
import java.sql.SQLException;
import java.util.List;

public class OfertaController {
    OfertaDAOJDBC conn = null;
   
    public OfertaController() throws ClassNotFoundException, SQLException {
        this.conn = new OfertaDAOJDBC();
    }
    
    public boolean salvar(Oferta oferta) {
        if(conn.salvar(oferta)){
            return true;
        } else {
            return false;
        }
    }
    
    public List<Oferta> consultar(String situacaoOferta){
        return this.conn.consultar(situacaoOferta);
    }
}
