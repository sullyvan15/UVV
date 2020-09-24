import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class MyWorld here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class MyWorld extends World
{

    /**
     * Constructor for objects of class MyWorld.
     * 
     */
    public MyWorld()
    {    
        super(600, 400, 1);
        
        
        wagner x = new wagner();
        x .getImage().scale(70,70);
        addObject(x,70,427); 
        
        arma y = new arma();
        y.getImage().scale(50,50);
        addObject(y,50,300);
         arma y1 = new arma();
        y1.getImage().scale(50,50);
        addObject(y1,40,200);
      
        
    }
}
