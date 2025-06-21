package com.singleton;
public class LoggerTest
{
    public static void main(String[] args) 
    {
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first message.");
        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second message.");
        
        if (logger1 == logger2)
        {
            System.out.println("Only one instance of Logger is used.");
        } else 
        {
            System.out.println("Different instances of Logger exist!");
        }
    }
}

