
package modelo;

/**
 *
 * @author Sullyvan Marks
 */



import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "curso")
public class Curso implements Serializable {
    @Id
    private Long id;
    @Column
    private String nome;
    @Column
    private String ementa;
    @Column
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
