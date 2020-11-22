
package modelo;

/**
 *
 * @author Sullyvan Marks
 */
public class Oferta {
    private Long id;
    private String dataInicial;
    private String dataFinal;
    private int status;
    private Long curso;
    private Long instrutor;
    
    
    public Oferta() {
    }

    public Oferta(Long id, String dataInicial, String dataFinal, int status, Long curso, Long instrutor) {
        this.id = id;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.status = status;
        this.curso = curso;
        this.instrutor = instrutor;
    }

 
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDataInicial() {
        return dataInicial;
    }

    public void setDataInicial(String dataInicial) {
        this.dataInicial = dataInicial;
    }

    public String getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(String dataFinal) {
        this.dataFinal = dataFinal;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Long getCurso() {
        return curso;
    }

    public void setCurso(Long curso) {
        this.curso = curso;
    }

    public Long getInstrutor() {
        return instrutor;
    }

    public void setInstrutor(Long instrutor) {
        this.instrutor = instrutor;
    }

    @Override
    public String toString() {
        return "Oferta{" + "id=" + id + ", dataInicial=" + dataInicial + ", dataFinal=" + dataFinal + ", status=" + status + ", curso=" + curso + ", instrutor=" + instrutor + '}';
    }

    
    
}
