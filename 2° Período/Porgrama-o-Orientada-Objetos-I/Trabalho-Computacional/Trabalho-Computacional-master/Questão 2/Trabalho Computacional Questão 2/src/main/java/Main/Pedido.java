package Main;

import java.util.ArrayList;

public class Pedido {
	//VARIAVEIS ENCAPSULADAS
	//*******************	
	private ArrayList<Cliente> listaCliente = new ArrayList<Cliente>();
	private ArrayList<Cliente> listaPedidos = new ArrayList<Cliente>();
	Cadastro cadastro = new Cadastro();			
	Cliente cliente;	
	//OPERACOES
	//*******************
	void incluirCliente (int clienteID) {
		System.out.println("Clientes");
		if (validarCliente (clienteID) == true) {
			System.out.println(" Cliente já cadastrado");
		} else {
			listaCliente.add(new Cliente(clienteID, true));
			System.out.println("Registro realizado");
		}
	}
	boolean validarCliente(int clienteID) {
		boolean status = false;
		for (int i = 0; i < listaCliente.size(); i++) {
			if (listaCliente.get(i).getclienteID() == clienteID) {
				status = true;
			} else {
				status = false;
			}
		}
		return status;
	}
	
	void incluirCursos(int clienteID, int indice) {
		for (int i = 0; i < listaCliente.size(); i++) {
			if (listaCliente.get(i).getclienteID() == clienteID) {

			}
		}		
		
		
		
	}

	
	//GETS & SETS
	//*******************
	public ArrayList<Cliente> getListaPedidos() {
		return listaPedidos;
	}
	public void setListaPedidos(ArrayList<Cliente> listaPedidos) {
		this.listaPedidos = listaPedidos;
	}
}