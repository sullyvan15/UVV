package Controllers;
import dao.JPA.CursoJpaDAO;
import modelo.Curso;

import java.sql.SQLException;
import java.util.List;


public class cursoontroller {
    CursoJpaDAO entityManager = null;
    
    public cursoontroller() throws ClassNotFoundException, SQLException {
        this.entityManager = new CursoJpaDAO();
    }
    
    public void persist(Curso curso) {
        entityManager.persist(curso);
    }
    
    public List<Curso> findAll(Long id){
        return entityManager.findAll();
    }
}
    