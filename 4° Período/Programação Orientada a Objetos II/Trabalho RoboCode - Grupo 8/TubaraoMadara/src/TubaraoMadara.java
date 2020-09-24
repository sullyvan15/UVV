
import robocode.*;
import robocode.util.Utils;

import java.awt.Color;
import java.awt.geom.Rectangle2D;
import java.util.*;
import java.awt.geom.Point2D;
/**
 * Classe principal
 * <p>
 * Estrategias: <br>
 * Targeting: Estimativa baseada em fator, implementando um sistema de bala virtual baseado <br>
 * em ondas para aprender rapidamente os possiveis angulos de acerto da bala com base <br>
 * nos padroes de movimento do inimigo. Prioriza o inimigo conhecido mais proximo como <br>
 * alvo para atirar. Versatil em combate corpo a corpo e 1v1; segmentado para permitir <br>
 * suposicoes mais precisas em combate 1v1, onde as varreduras sao mais frequentes. <br>
 * <br>
 * <br>
 * Movimento: Risco minimo para corpo a corpo, Pseudo-Aleatorio para 1v1 <br>
 * (tentando permanecer perpendicular onde possivel para o angulo de escape <br>
 * maximo de balas chegando). <br>
 * <br>
 * <br>
 * Radar: Bloqueio de alvo fraco, tentando permanecer focado no alvo , <br>
 * mas varrendo os campo de batalha quando o alvo e perdido (frequentemente) <br>
 * para encontrar um alvo existente ou melhor (mais proximo) <br>
 * <br>
 * <br>
 * Descricao do Nome: o tubarao e o representante do curso, e madara porque possui
 * caracteristicas semelhantes com o personagem de ser capaz de prever a estrategia
 * dos oponentes.
 * */

    public class TubaraoMadara extends robocode.Robot {
    Point2D.Double myLoc, prevLoc, nextLoc;
    HashMap<String,inimigo> Inimigos;		// HashMap armazena informações sobre Inimigos quando escaneado
    inimigo alvo;
    static HashMap<String,int[][][][]> statStore = new HashMap<>();	// HashMap armazena informações de fatorsup segmentadas para Inimigos, estáticas para persistir por meio de rodadas.
    int Direcao = 1;		// Direcao usado em fatorsup. Variável global para armazenar entre os disparos.
    double perpendicularDirecao = 1;
    int hits;

    public void run() {
        // Cores do robô:
        setBodyColor(Color.white);
        setGunColor(Color.pink);
        setRadarColor(Color.black);
        setBulletColor(Color.pink);
        setScanColor(Color.pink);

        // Inicializar todos as variáveis
        Inimigos = new HashMap<String,inimigo>();
        alvo = null;
        double Poder;

        Rectangle2D CampoBatalha = new Rectangle2D.Double(50, 50, getBattleFieldWidth() - 100, getBattleFieldHeight() - 100);	// CampoBatalha bounded by a further 50px on each side for wall avoidance, preventing collisions & ease of alvoing by wall-crawlers
        nextLoc = null;
        hits = 0;

        while(true) {
            myLoc = new Point2D.Double(getX(), getY());
           // Varredura, alvoing e disparo:
            if(alvo == null) {		// Se não houver alvo, gire o radar para adquirir um
                turnRadarRight(360);
            } else {					// Caso contrário, gire para o rosto e atire no alvo
                double radarangulo = Utils.normalRelativeAngleDegrees(Math.toDegrees(calcangulo(myLoc, alvo.loc)) - getRadarHeading());
                alvo = null;
                turnRadarRight(radarangulo);
                if(alvo == null) {	// Se o alvo mudou, adquira um novo alvo
                    turnRadarRight(radarangulo < 0 ? -360 - radarangulo : 360 - radarangulo);
                }
            }
           
            // Movimento, só se move se houver um alvo, continua escaneando de outra forma:
            if(alvo != null) {
                if(getOthers() > 1) {
                    if(nextLoc == null) {
                        nextLoc = prevLoc = myLoc;
                    }
                    // Gera e avalia 100 pontos para seu risco, selecionando o ponto de menor risco
                    for(int i = 0; i < 100; i++) {
                        double d = (Math.random() * 100) + 100;
                        Point2D.Double p = calcPoint(myLoc, Math.toRadians(Math.random() * 360), d);
                        if(CampoBatalha.contains(p) && (calcRisk(p) < calcRisk(nextLoc))) {
                            nextLoc = p;
                        }
                    }
                } else {
                    // Tenta permanecer perpendicular em 1v1:
                    double d = (Math.random() * 100) + 150;
                    // Muda a direção perpendicular de movimento para o inimigo caso
                    // não exista um ponto válido (pelo menos absoluto inimigo rolamento + - 60deg)
                    // na direção atual OU pseudo-aleatoriamente, dificultando os algoritmos de alvo do inimigo.

                    // Aleatoriedade amplamente baseada no número de acertos do inimigo acertados, estabelecendo um
                    // equilíbrio entre excelente prevenção de alvo de alvo frontal e um nível razoável de aleatoriedade
                    // verdadeira para deter algoritmos de alvo de alvo mais avançados.

                    if(!CampoBatalha.contains(calcPoint(myLoc, calcangulo(myLoc, alvo.loc) +
                            Math.PI / 3 * perpendicularDirecao, d)) || ((Math.random() * (hits % 5) > 0.6))) {
                        perpendicularDirecao = -perpendicularDirecao;
                    }

                    // Se possível, irá selecionar um angulo perpendicular ao inimigo,
                    // senão encontra o angulo válido mais próximo

                    double angulo = calcangulo(myLoc, alvo.loc) + (Math.PI / 2) * perpendicularDirecao;
                    while(!CampoBatalha.contains(calcPoint(myLoc, angulo, d))) {
                        angulo -= perpendicularDirecao * 0.1;
                    }
                    nextLoc = calcPoint(myLoc, angulo, d);
                }
                // Calcula a distância absoluta e o ângulo ao ponto; atualizar prevLoc
                double distance = myLoc.distance(nextLoc);
                double moveangulo = Utils.normalRelativeAngleDegrees
                        (Math.toDegrees(calcangulo(myLoc, nextLoc)) - getHeading());
                prevLoc = myLoc;

               // Calcule os valores para a menor curva e movimento para alcançar o ponto
                if(Math.abs(moveangulo) > 90) {
                    moveangulo = Utils.normalRelativeAngleDegrees(moveangulo + 180);
                    distance = -distance;
                }
                turnRight(moveangulo);
                ahead(distance);
            }
        }
    }

    /** Verificar robo, adicionar aos registros */
    public void onScannedRobot(ScannedRobotEvent e) {
        // Adicionar / atualizar registro inimigo:
        String nome = e.getName();
        inimigo inimigo;
        if(Inimigos.get(nome) == null) {
            inimigo = new inimigo(nome, calcPoint(myLoc, Math.toRadians(getHeading() + e.getBearing()), e.getDistance()), e.getEnergy(), e.getBearing(), e.getHeading(), new Vector<>());
        } else {
            inimigo = new inimigo(nome, calcPoint(myLoc, Math.toRadians(getHeading() + e.getBearing()), e.getDistance()), e.getEnergy(), e.getBearing(), e.getHeading(), Inimigos.get(nome).ondas);
        }
        Inimigos.put(nome, inimigo);

        // Se necessário, atualize o alvo:
        if((alvo == null) || (alvo.nome.equals(inimigo.nome)) || (e.getDistance() < alvo.loc.distance(myLoc))) {
            alvo = inimigo;
        }

        // // Obter / criar registros de estatísticas do inimigo:
        int[][][][] stats = statStore.get(nome.split(" ")[0]);	// // Robôs do mesmo tipo são nomeados "XXX (#)"; combinando dados de bots com a mesma IA, os fatorsups podem ser aprendidos muito mais rapidamente ao enfrentar vários bots do mesmo tipo.
        if(stats == null) {
            stats = new int[2][9][13][31];		// Segmenta estatísticas de fatorsup de acordo com corpo-a-corpo / 1v1, direção lateral (movimento em direção / para longe / paralelo OU sem movimento), distância do inimigo (distância máxima de varredura = 1200px, um segmento por 100px), com 31 possíveis 'fatorsups' únicos
            statStore.put(nome.split(" ")[0], stats);
        }

// Função de poder de bala baseada em distância simples. Muito longe inimigo => poder de bala inferior => maior velocidade de bala => maior precisão (espero). Sempre: 1 <= poder <= 3        double poder = getOthers() > 1 ? 3 : Math.min(3, Math.max(600 / e.getDistance(), 1));
        double absoluteBearing = Math.toRadians(getHeading() + inimigo.rolamento);

        // Atualize a Direção somente se estiver em movimento: é provável que o movimento seja retomado na mesma Direção após a paralisação para escanear / disparar.
        if(e.getVelocity() != 0) {
            if(Math.sin(Math.toRadians(inimigo.heading) - absoluteBearing) * e.getVelocity() < 0) {
                Direcao = -1;
            } else {
                Direcao = 1;
            }
        }

        // Buscar estatísticas fatorsup existentes de acordo com o status do inimigo:
        int[] currentStats = stats[getOthers() > 1 ? 0 : 1][(int) (e.getVelocity() == 0 ? 8 : Math.abs(Math.sin(Math.toRadians(inimigo.heading) - absoluteBearing) * e.getVelocity() / 3))][(int) (e.getDistance() / 100)];

        // Cria e adiciona nova onda; atualizar todas as ondas existentes:

        OndaBala newWave = new OndaBala(myLoc, inimigo.loc, absoluteBearing, alvo.Poder, getTime(), Direcao, currentStats, getTime() - 1);
        inimigo.ondas.add(newWave);
        for(int i = 0; i < inimigo.ondas.size(); i++) {
            OndaBala currentWave = inimigo.ondas.get(i);
            if(currentWave.GolpeOnda(inimigo.loc, getTime())) {
                inimigo.ondas.remove(currentWave);
                i--;
            }
        }

       // Só dispara em alvo; só dispara se não for desativado (não pode ter mais armas, mas pode sobreviver mais que Inimigos)
        if((inimigo == alvo) && (alvo.Poder < getEnergy())) {
            int bestindex = 15;
            for(int i = 0; i < 31; i++) {
                if(currentStats[bestindex] < currentStats[i]) {
                    bestindex = i;
                }
            }

            double fatorsup = (double)(bestindex - (currentStats.length - 1) / 2) / ((currentStats.length - 1) / 2);
            double anguloOffset = Direcao * fatorsup * newWave.maxEscapeangulo();
            double gunAdjust = Math.toDegrees(Utils.normalRelativeAngle(absoluteBearing - Math.toRadians(getGunHeading()) + anguloOffset));
// melhoria da estimativa: só dispara se o destino do alvo projetado estiver dentro de CampoBatalha            turnGunRight(gunAdjust);
            fire(alvo.Poder);
        }
    }

    /** Usado em 1v1 para permitir a mudança de direcao caso o
    inimigo tenha atingido a direcao atual, ajudando a diminuir a precisao de alvo: */
    public void onHitByBullet(HitByBulletEvent e) {
        if(getOthers() == 1) {
            hits++;
        }
    }

    /** Remova o robo dos registros na morte */
    public void onRobotDeath(RobotDeathEvent e) {
        Inimigos.remove(e.getName());
        if((alvo != null) && (alvo.nome.equals(e.getName()))) {
            alvo = null;
        }
    }

    /** A funcao calcula o risco incorrido ao se mover para um determinado ponto: */
    public double calcRisk(Point2D point) {
        double risk = 0;
        // Usa antigravidade para repelir de Inimigos; também contabiliza Inimigos de alta energia sendo um risco maior
        for (inimigo inimigo : Inimigos.values()) {
            risk += (inimigo.energia + 50) / point.distanceSq(inimigo.loc);
        }
        // Repele os locais anteriores e atuais para evitar ficar muito perto de um único local
        risk += 0.1 / point.distanceSq(prevLoc);
        risk += 0.1 / point.distanceSq(myLoc);

        return risk;
    }

    /** A funcao calcula um ponto em um determinado angulo e a distancia de um ponto de origem: */
    public Point2D.Double calcPoint(Point2D origin, double angulo, double distance) {
        return new Point2D.Double(origin.getX() + distance * Math.sin(angulo),
                origin.getY() + distance * Math.cos(angulo));
    }

    /** A funcao calcula o angulo entre 2 pontos: */
    public double calcangulo(Point2D p, Point2D q) {
        return Math.atan2(q.getX() - p.getX(), q.getY() - p.getY());
    }
}