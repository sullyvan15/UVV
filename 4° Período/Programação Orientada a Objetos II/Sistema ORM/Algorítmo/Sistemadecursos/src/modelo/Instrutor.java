
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
@Table(name = "instrutor")

public class Instrutor implements Serializable {
    @Id
    private Long id;
    @Column
    private String nome;
    @Column
    private String cpf;
    @Column
    private String endereco;
    @Column
    private String celular;
 

    public Instrutor() {
    }

    public Instrutor(Long id, String nome, String cpf, String endereco, String celular) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.celular = celular;
    }
    
    
    

    public Long getId() {
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    @Override
    public String toString() {
        return "Instrutor{" + "id=" + id + ", nome=" + nome + ", cpf=" + cpf + ", endereco=" + endereco + ", celular=" + celular + '}';
    }
      
}
