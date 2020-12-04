
package Main;
/**
 *
 * @author Sullyvan Marks
 */
import Visao.NewJPanel1;
import javax.swing.JApplet;
import javax.swing.JFrame;
import javax.swing.SwingUtilities;
import javax.swing.UIManager;

public class Main extends JApplet {
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            
            @Override
            public void run() {
                try {
                    UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
                } catch (Exception e) {
                }
                
                NewJPanel1 view = new NewJPanel1();
                
                JFrame frame = new JFrame("Sistema de cursos");
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                
                JApplet applet = new Main();
                applet.init();
                
                frame.setContentPane(view);
                
                frame.pack();
                frame.setLocationRelativeTo(null);
                frame.setVisible(true);
                
                applet.start();
            }
        });
    }
    
    @Override
    public void init() {
    }

    
}
