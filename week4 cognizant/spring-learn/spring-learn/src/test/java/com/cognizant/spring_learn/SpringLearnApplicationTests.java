package com.cognizant.spring_learn;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.springlearn.SpringLearnApplication;

/**
 * Main class to bootstrap the Spring Boot application.
 */
@SpringBootApplication
public class SpringLearnApplicationTests {

    public static void main(String[] args) {
        // This line launches the Spring Boot application
        SpringApplication.run(SpringLearnApplication.class, args);
        System.out.println("Spring Learn Application Started Successfully!");
    }
}
