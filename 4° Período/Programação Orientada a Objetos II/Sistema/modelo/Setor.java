package modelo;
import modelo.Funcionario;
import dao.CargoDAO;
import dao.SetorDAO;
import dao.FuncionarioDAO;
import modelo.Cargo;


public class Setor {
 
    private Integer id;
    private String NomeSetor;
    private String Atribuicoes;    

    private List<Funcionario> funcionarios;

    public void adicionarFuncionarios(Funcionario a){
       funcionarios.add(a);
    }
    
    public Setor() {
        ListaFuncionarios = new ArrayList<>();
    }

    public Setor(Integer id, String NomeSetor) {
        this();
        this.id = id;
        this.NomeSetor = NomeSetor;
        this.Atribuicoes = Atribuicoes;
    }

    public List<Funcionario> getListaFuncionarios() {
        return ListaFuncionarios;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeSetor() {
        return NomeSetor;
    }

    public void setNomeSetor(String NomeSetor) {
        this.NomeSetor = NomeSetor;
    }
    public String getAtribuicoes() {
        return Atribuicoes;
    }
    public void setAtribuicoes(String Atribuicoes) {
        this.Atribuicoes = Atribuicoes;
    }

    
}
