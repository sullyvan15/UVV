
package controle;

import dao.FuncionarioDAO;
import dao.FuncionarioDAOJDBC;
import dao.CargoDAO;
import dao.CargoDAOJDBC;
import java.sql.SQLException;
import modelo.Funcionario;
import modelo.Cargo;


public class ControleGestao {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
    
        FuncionarioDAO daoA = new FuncionarioDAOJDBC();

        Funcionario a1 = new Funcionario();
        a1.setNome("Eduardo");


        Funcionario a2 = new Funcionario();
        a2.setNome("Sullyvan");


        Funcionario a3 = new Funcionario();
        a3.setNome("Gabriel");



        Cargo l1 = new Cargo();
        l1.setNomeCargo("Gerente");

        Cargo l2 = new Cargo();
        l2.setNomeCargo("Programador");

        Cargo l3 = new Cargo();
        l3.setNomeCargo("Assistente técnico");

        a1.setId(1);
        a3.setId(3);

        l1.adicionarFuncionarios(a1);
        l1.adicionarFuncionarios(a3);
        CargoDAO daoL = new CargoDAOJDBC();
        daoL.salvar(l1);
        
    }
}
