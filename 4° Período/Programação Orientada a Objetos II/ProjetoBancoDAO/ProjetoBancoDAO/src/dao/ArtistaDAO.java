/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.util.Collection;
import modelo.Artista;

/**
 *
 * @author alunolab07
 */
public interface ArtistaDAO {
    public void salvar(Artista artista);
    public void excluir(Artista artista);
    public Collection obterTodos();
    public Artista recuperPeloNome(String nome);
}
