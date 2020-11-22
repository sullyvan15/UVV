
package modelo;


public class Funcionario {
    private Integer id;
    private String nome; 
    private String dataAdmissao;

       

    public Funcionario() {
    }

    public Funcionario(Integer id, String nome) {
        this.id = id;
        this.nome = nome;
        this.dataAdmissao = dataAdmissao;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getdataAdmissao() {
        return dataAdmissao;
    }

    public void setdataAdmissao(String nome) {
        this.dataAdmissao = dataAdmissao;
    }

    @Override
    public String toString() {
        return "Funcionario{" + "id=" + id + ", nome=" + nome + '}';
    }
    
}
