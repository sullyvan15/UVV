/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author alunolab07
 */
public class Livro {
    private Integer id;
    private String titulo;    

    private List<Autor> listaAutores;

    public void adicionarAutor(Autor a){
        listaAutores.add(a);
    }
    
    public Livro() {
        listaAutores = new ArrayList<>();
    }

    public Livro(Integer id, String titulo) {
        this();
        this.id = id;
        this.titulo = titulo;
    }

    public List<Autor> getListaAutores() {
        return listaAutores;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }


    
    
    
}
