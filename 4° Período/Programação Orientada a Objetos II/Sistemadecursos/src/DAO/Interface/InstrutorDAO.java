
package dao.Interface;

/**
 *
 * @author Sullyvan Marks
 */

import modelo.Instrutor;

public interface InstrutorDAO {
    public boolean salvar(Instrutor instrutor);
    public Instrutor consultarNome(String nome);
    public Instrutor consultarId(Long id);
}
