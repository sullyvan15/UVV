
package Controllers;

/**
 *
 * @author Sullyvan Marks
 */ 

import dao.JPA.OfertaJpaDAO;
import modelo.Oferta;

import java.sql.SQLException;
import java.util.List;


public class OfertaController {
    OfertaJpaDAO entityManager = null;
    public Oferta oferta;
    
    public OfertaController() throws ClassNotFoundException, SQLException {
        this.entityManager = new OfertaJpaDAO();
    }
    
    public void persist(Oferta oferta) {
        entityManager.persist(oferta);
    }
    
    public List<Oferta> findAll(Long id){
        return entityManager.findAll();
    }
    
}
