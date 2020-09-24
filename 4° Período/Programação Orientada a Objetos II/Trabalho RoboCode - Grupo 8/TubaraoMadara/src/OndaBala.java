import java.awt.geom.Point2D;

/** Classe auxiliar para a coleta de atributos relacionados a municao inimiga */
public class OndaBala {
    private Point2D.Double origin, UltConhecido;
    private double rolamento, poder;
    private long TempoDeFogo;
    private int Direcao;
    private int[] returnSegment;
    private long utlimavez;

    public OndaBala(Point2D.Double location, Point2D.Double inimigoLoc, double rolamento, double poder, long TempoDeFogo, int Direcao, int[] segment, long time) {
        this.origin = location;
        this.UltConhecido = inimigoLoc;
        this.rolamento = rolamento;
        this.poder = poder;
        this.TempoDeFogo = TempoDeFogo;
        this.Direcao = Direcao;
        this.returnSegment = segment;
        utlimavez = time;
    }
    /** A funcao coleta a velocidade da bala: */
    public double getvelocidadebala() {
        return 20 - poder * 3;
    }
    /** A funcao retorna o angulo de escape: */
    public double maxEscapeangulo() {
        return Math.asin(8 / getvelocidadebala());
    }

    /** A funcao calcula se uma onda atingiu um inimigo, bem como o fatorsup necessario para que um projetil desta onda acertasse: */
    public boolean GolpeOnda(Point2D.Double inimigo, long time) {
        long dt = time - utlimavez;
        double dx = (inimigo.getX() - UltConhecido.getX()) / dt;
        double dy = (inimigo.getY() - UltConhecido.getY()) / dt;

        // Como as varreduras são inconsistentes, interpola linearmente os dados conhecidos para determinar se uma onda poderia ter atingido enquanto não estava à vista do radar:
        while (utlimavez < time) {
            if (origin.distance(inimigo) <= (utlimavez - TempoDeFogo) * getvelocidadebala()) {
                double desejadaDirecao = Math.atan2(inimigo.getX() - origin.getX(), inimigo.getY() - origin.getY());
                double anguloOffset = robocode.util.Utils.normalRelativeAngle(desejadaDirecao - rolamento);
                double fatorsup = Math.max(-1, Math.min(1, anguloOffset / maxEscapeangulo())) * Direcao;
                int index = (int) Math.round((returnSegment.length - 1) / 2 * (fatorsup + 1));
                returnSegment[index]++;
                return true;
            }
            utlimavez++;
            UltConhecido = new Point2D.Double(UltConhecido.getX() + dx, UltConhecido.getY() + dy);
        }
        return false;
    }
}
