
package dao.Interface;

/**
 *
 * @author Sullyvan Marks
 */

import modelo.Oferta;

public interface OfertaDAO {
    public boolean salvar(Oferta oferta);
    public Oferta consultarId(Long id);
}
