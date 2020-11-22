/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

/**
 *
 * @author alunolab07
 */
public interface Config {
    // "jdbc:hsqldb:hsql://localhost/javadiscos", "sa", ""
    public static final String NOME_DRIVER = "org.hsqldb.jdbcDriver";
    public static final String BD_URL = "jdbc:hsqldb:hsql://localhost/javadiscos";
    public static final String BD_LOGIN = "sa";
    public static final String BD_SENHA = "";
}
