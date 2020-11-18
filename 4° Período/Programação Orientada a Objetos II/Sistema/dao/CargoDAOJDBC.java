/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import modelo.Funcionario;
import modelo.Cargo;
import tools.DAOBaseJDBC;


public class CargoDAOJDBC extends DAOBaseJDBC implements CargoDAO{

    public CargoDAOJDBC() throws ClassNotFoundException, SQLException {
    }

    @Override
    public boolean salvar(Cargo cargo) {
        
        PreparedStatement pstm;
        String sql = "INSERT INTO Funcionário (nome) VALUES (?)";
        
        try {
            con.setAutoCommit(false);
            
            pstm = con.prepareStatement(sql);
            pstm.setString(1, cargo.getNomeCargo());
            pstm.executeUpdate();   
            
            this.gravarfuncionarios(cargo);
            
            con.commit();
            
        } catch (SQLException ex) {
            Logger.getLogger(Funcionario.class.getName()).log(Level.SEVERE, null, ex);
            try {
                con.rollback();
                con.setAutoCommit(true);
            } catch (SQLException ex1) {
                Logger.getLogger(CargoDAOJDBC.class.getName()).log(Level.SEVERE, null, ex1);
            }
        }          
        
        return true;
        
    }
    
    private void gravarfuncionarios(Cargo l) throws SQLException{
       String sql1 = "select max(idCargo) from Cargo";
       String sql2 = "update Funcionario set Cargo_idCargo = ? where idFuncionario = ?";
       
       PreparedStatement pstm = null;

       Integer idCargoRecuperado;
       pstm = con.prepareStatement(sql1);
       ResultSet rs = pstm.executeQuery();  
       rs.next();
       idCargoRecuperado = rs.getInt(1);
       
       pstm = con.prepareStatement(sql2);
       pstm.setInt(1, idCargoRecuperado);

       
       List<Funcionario> funcionarios = l.getListaFuncionarios();
       for(Funcionario elem : funcionarios) {
            pstm.setInt(2, elem.getId());
            pstm.executeUpdate();   
       }
    }
}
