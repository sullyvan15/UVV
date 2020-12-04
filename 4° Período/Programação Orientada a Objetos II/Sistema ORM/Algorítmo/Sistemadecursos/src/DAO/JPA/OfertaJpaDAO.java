package dao.JPA;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import modelo.Oferta;

public class OfertaJpaDAO {

       private static OfertaJpaDAO instance;
       public EntityManager entityManager;

       public static OfertaJpaDAO getInstance(){
         if (instance == null){
            instance = new OfertaJpaDAO();
         }

         return instance;
       }

       public OfertaJpaDAO() {
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

       public Oferta getById(final Long id) {
         return entityManager.find(Oferta.class, id);
       }

       @SuppressWarnings("unchecked")
       public List<Oferta> findAll() {
         return entityManager.createQuery("FROM " +
         Oferta.class.getName()).getResultList();
       }

       public void persist(Oferta oferta) {
         try {
            entityManager.getTransaction().begin();
            entityManager.persist(oferta);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void merge(Oferta oferta) {
         try {
            entityManager.getTransaction().begin();
            entityManager.merge(oferta);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void remove(Oferta oferta) {
         try {
            entityManager.getTransaction().begin();
            oferta = entityManager.find(Oferta.class, oferta.getId());
            entityManager.remove(oferta);
            entityManager.getTransaction().commit();
         } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
         }
       }

       public void removeById(final Long id) {
         try {
            Oferta oferta = getById(id);
            remove(oferta);
         } catch (Exception ex) {
            ex.printStackTrace();
         }
       }
// -------------------------------------------------------------------
   

    

}