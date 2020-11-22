/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controle;

import dao.ArtistaDAO;
import dao.ArtistaDAOJDBC;
import java.sql.SQLException;
import modelo.Artista;

/**
 *
 * @author alunolab07
 */
public class ControleGestaoArtista {
    
    public void contoleSalvarArtista() throws ClassNotFoundException, SQLException{
        
        ArtistaDAO dao = new ArtistaDAOJDBC();
        
        Artista artista = new Artista();
        artista.setNome("Pancadão Prepared DAO");
        artista.setBanda(false);
        artista.setPais("BRAZIL");        
        
        dao.salvar(artista);
    }
    
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        ControleGestaoArtista executar = new ControleGestaoArtista();
        executar.contoleSalvarArtista();
    }
    
}
