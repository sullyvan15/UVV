/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Main;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Cliente implements Serializable{
	//VARIAVEIS ENCAPSULADAS
	//*******************
	private int clienteID;
        
	private float total;
	private boolean status; // TRUE = Curso não disponível  | FALSE = Curso disponível
	//CONTRUTOR DO OBJETO
	//*******************
	Cliente(int clienteID, boolean status) {
		this.clienteID = clienteID;		
		this.setStatus(status);
	}
	//GETS & SETS
	//*******************
	public int getClienteID() {
		return clienteID;
	}
	public void setclienteID(int clienteID) {
		this.clienteID = clienteID;
	}
	public boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public float getTotal() {
		return total;
	}
	public void setTotal(float total) {
		this.total = total;
	}

    int getclienteID() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}