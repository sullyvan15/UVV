import java.awt.geom.Point2D;
import java.util.Vector;

/** Classe auxiliar para a coleta de atributos de robos inimigos */
public class inimigo {
    public String nome;
    public double Poder;
    public Point2D.Double loc;
    public double energia, rolamento, heading;
    public Vector<OndaBala> ondas;    // OndaBalas são armazenados por inimigo, para facilidade de acesso

    public inimigo(String nome, Point2D.Double loc, double energia, double rolamento, double heading, Vector<OndaBala> ondas) {
        this.nome = nome;
        this.loc = loc;
        this.Poder = Poder;
        this.energia = energia;
        this.rolamento = rolamento;
        this.heading = heading;
        this.ondas = ondas;
    }
}