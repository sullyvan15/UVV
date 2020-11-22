
package modelo;

/**
 *
 * @author Sullyvan Marks
 */


public class Curso {
    private Long id;
    private String nome;
    private String ementa;
    private String cargaHoraria;

    public Curso() {
    }

    public Curso(Long id, String nome, String ementa, String cargaHoraria) {
        this.id = id;
        this.nome = nome;
        this.ementa = ementa;
        this.cargaHoraria = cargaHoraria;
    }
  
    
    
    
    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmenta() {
        return ementa;
    }

    public void setEmenta(String ementa) {
        this.ementa = ementa;
    }

    public String getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(String cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    @Override
    public String toString() {
        return "Curso{" + "id= " + id + ", nome= " + nome + ", ementa= " + ementa + ", cargaHoraria= " + cargaHoraria + '}';
    }
    
}
