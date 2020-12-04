
package Controllers;

/**
 *
 * @author Sullyvan Marks
 */

import dao.JPA.InstrutorJpaDAO;
import modelo.Instrutor;

import java.sql.SQLException;
import java.util.List;
import javax.persistence.EntityManager;

public class InstrutorController {
    InstrutorJpaDAO entityManager = null;
    
    public InstrutorController() throws ClassNotFoundException, SQLException {
        this.entityManager = new InstrutorJpaDAO();
    }
    
    public void persist(Instrutor instrutor) {
        entityManager.persist(instrutor);
    }
    
    public List<Instrutor> findAll(Long id){
        return entityManager.findAll();
    }
    
}
