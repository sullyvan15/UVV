
package dao.Interface;
/**
 *
 * @author Sullyvan Marks
 */

import modelo.Curso;

public interface CursoDAO {
    public boolean salvar(Curso curso);
    public Curso consultarNome(String nome);
    public Curso consultarId(Long id);
}
