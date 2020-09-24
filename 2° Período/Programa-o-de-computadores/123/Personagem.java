import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Personagem here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Personagem extends Actor
{
    /**
     * Act - do whatever the Personagem wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
     protected void remove(){
    if(isTouching(arma.class)){
      removeTouching(arma.class);
      Greenfoot.playSound("Gun Reload sound effect.mp3");
    }
    
    }    
    public void act() 
    {
    
}

protected void virarBorda(){
    if(isAtEdge()){
        turn(180);
}
    }    


}