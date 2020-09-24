package entidade;
public class Cursos {
	//VARIAVEIS ENCAPSULADAS
	//*******************	
	private String descricao;
	private int quantidade;
	private float valor;	
	//CONTRUTOR DO OBJETO
	//*******************	
	Cursos(String descricao, int quantidade, float valor) {
		this.descricao = descricao;
		this.quantidade = quantidade;
		this.valor = valor;
	}		
	//GETS & SETS
	//*******************
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public int getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
}