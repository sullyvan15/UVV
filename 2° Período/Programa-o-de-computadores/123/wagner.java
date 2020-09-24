import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class wagner here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class wagner extends Personagem
{
    /**
     * Act - do whatever the wagner wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public void act() 
    {
        move(2);
        remove();
        virarBorda();
        if(Greenfoot.isKeyDown("a")){
        turn(1);
        }else{
        if(Greenfoot.isKeyDown("d")){
        turn(-1);
        }
        if(Greenfoot.isKeyDown("w")){
        turn(-3);
        }else{
        if(Greenfoot.isKeyDown("s")){
        turn(-3);
        }
        
    }    
}
}
}
