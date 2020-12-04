package dao.JPA;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import modelo.Curso;

public class CursoJpaDAO {

       private static CursoJpaDAO instance;
       public EntityManager entityManager;

       public static CursoJpaDAO getInstance(){
         if (instance == null){
            instance = new CursoJpaDAO();
         }

         return instance;
       }

       public CursoJpaDAO() {
         entityManager = getEntityManager();
       }

       private EntityManager getEntityManager() {
        EntityManagerFactory factory =
        Persistence.createEntityManagerFactory("sistemaPU");
        if (entityManager == null) {
          entityManager = factory.createEntityManager();
        }

        return entityManager;
       }

       public Curso getById(final Long id) {
         return entityManager.find(Curso.class, id);
       }

       @SuppressWarnings("unchecked")
       public List<Curso> findAll() {
         return entityManager.createQuery("FROM " +
         Curso.class.getName()).getResultList();
       }

       
       public void persist(Curso curso) {
         try {
            entityManager.getTransaction().begin();
            entityManager.persist(curso);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void merge(Curso curso) {
         try {
            entityManager.getTransaction().begin();
            entityManager.merge(curso);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void remove(Curso curso) {
         try {
            entityManager.getTransaction().begin();
            curso = entityManager.find(Curso.class, curso.getId());
            entityManager.remove(curso);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void removeById(final Long id) {
         try {
            Curso curso = getById(id);
            remove(curso);
         } catch (Exception ex) {
            ex.printStackTrace();
         }
       }

    
}