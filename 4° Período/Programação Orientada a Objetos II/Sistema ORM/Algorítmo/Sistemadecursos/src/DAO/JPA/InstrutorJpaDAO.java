package dao.JPA;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import modelo.Instrutor;

public class InstrutorJpaDAO {

       private static InstrutorJpaDAO instance;
       public EntityManager entityManager;

       public static InstrutorJpaDAO getInstance(){
         if (instance == null){
            instance = new InstrutorJpaDAO();
         }

         return instance;
       }

       public InstrutorJpaDAO() {
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

       public Instrutor getById(final Long id) {
         return entityManager.find(Instrutor.class, id);
       }

       @SuppressWarnings("unchecked")
       public List<Instrutor> findAll() {
         return entityManager.createQuery("FROM " +
         Instrutor.class.getName()).getResultList();
       }

       public void persist(Instrutor instrutor) {
         try {
            entityManager.getTransaction().begin();
            entityManager.persist(instrutor);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void merge(Instrutor instrutor) {
         try {
            entityManager.getTransaction().begin();
            entityManager.merge(instrutor);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void remove(Instrutor instrutor) {
         try {
            entityManager.getTransaction().begin();
            instrutor = entityManager.find(Instrutor.class, instrutor.getId());
            entityManager.remove(instrutor);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void removeById(final Long id) {
         try {
            Instrutor instrutor = getById(id);
            remove(instrutor);
         } catch (Exception ex) {
            ex.printStackTrace();
         }
       }

    

   

   
   

}