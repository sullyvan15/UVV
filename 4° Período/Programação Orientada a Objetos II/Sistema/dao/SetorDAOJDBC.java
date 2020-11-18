package dao;
    
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import modelo.Funcionario;
import modelo.Setor;
import tools.DAOBaseJDBC;
import modelo.Cargo;

public class SetorDAOJDBC extends DAOBaseJDBC implements SetorDAO{

        public SetorDAOJDBC() throws ClassNotFoundException, SQLException {
        }
    
        @Override
        public boolean salvar(Setor Setor) {
            
            PreparedStatement pstm;
            String sql = "INSERT INTO Setor (nome_setor) VALUES (?)";
            
            try {
                con.setAutoCommit(false);
                
                pstm = con.prepareStatement(sql);
                pstm.setString(1, Setor.getNomeSetor());
                pstm.executeUpdate();   
                
                this.gravarfuncionarios(Setor);
                
                con.commit();
                
            } catch (SQLException ex) {
                Logger.getLogger(Funcionario.class.getName()).log(Level.SEVERE, null, ex);
                try {
                    con.rollback();
                    con.setAutoCommit(true);
                } catch (SQLException ex1) {
                    Logger.getLogger(SetorDAOJDBC.class.getName()).log(Level.SEVERE, null, ex1);
                }
            }          
            
            return true;
            
        }
        
        private void gravarfuncionarios(Setor l) throws SQLException{
           String sql1 = "select max(idSetor) from Setor";
           String sql2 = "update Funcionario set Setor_idSetor = ? where idFuncionario = ?";
           
           PreparedStatement pstm = null;
    
           Integer idSetorRecuperado;
           pstm = con.prepareStatement(sql1);
           ResultSet rs = pstm.executeQuery();  
           rs.next();
           idSetorRecuperado = rs.getInt(1);
           
           pstm = con.prepareStatement(sql2);
           pstm.setInt(1, idSetorRecuperado);
    
           
           List<Funcionario> funcionarios = l.getListaFuncionarios();
           for(Funcionario elem : funcionarios) {
                pstm.setInt(2, elem.getId());
                pstm.executeUpdate();   
           }
        }
    }
    

