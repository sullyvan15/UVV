package Main;

import java.util.ArrayList;
import entidade.Exatas;
import entidade.Humbio;
public class Cadastro {
	//VARIAVEIS ENCAPSULADAS
	//*******************	
	private ArrayList<Exatas> listaRegistroExatas = new ArrayList<Exatas>();
	private ArrayList<Humbio> listaRegistroHumbio = new ArrayList<Humbio>();	
	//GETS & SETS
	//*******************
	public ArrayList<Exatas> getListaRegistroExatas() {
		return listaRegistroExatas;
	}
	public void setListaRegistroExatas(ArrayList<Exatas> listaRegistroExatas) {
		this.listaRegistroExatas = listaRegistroExatas;
	}
	public ArrayList<Humbio> getListaRegistroHumbio() {
		return listaRegistroHumbio;
	}
	public void setListaRegistroHumbio(ArrayList<Humbio> listaRegistroHumbio) {
		this.listaRegistroHumbio = listaRegistroHumbio;
	}	
	//OPERACOES
	//*******************	
	void cadastroExatas(String descricao, int quantidade, float valor) {
		listaRegistroExatas.add(new Exatas(descricao, quantidade, valor));
	}	
	void cadastroHumbio(String descricao, int quantidade, float valor) {
		listaRegistroHumbio.add(new Humbio(descricao, quantidade, valor));
	}	
	void listarExatas() {
		for (int i = 0; i < listaRegistroExatas.size(); i++) {
			System.out.print("Indice " + i);
			System.out.println(" - Curso: " + listaRegistroExatas.get(i).getDescricao() + " - Vagas: " + listaRegistroExatas.get(i).getQuantidade() + " - Custo por curso: " + listaRegistroExatas.get(i).getValor());			
		}
	}	
	void listarHumbio() {
		for (int i = 0; i < listaRegistroHumbio.size(); i++) {
			System.out.print("Indice " + i);
			System.out.println(" - Curso: " + listaRegistroHumbio.get(i).getDescricao() + " - Quantidade: " + listaRegistroHumbio.get(i).getQuantidade() + " - Custo por unidade: " + listaRegistroHumbio.get(i).getValor());			
		}
	}	
	void exclusaoExatas(int indice) {
		listaRegistroExatas.remove(indice);
	}
	void exclusaoHumbio(int indice) {
		listaRegistroHumbio.remove(indice);
	}	
}

