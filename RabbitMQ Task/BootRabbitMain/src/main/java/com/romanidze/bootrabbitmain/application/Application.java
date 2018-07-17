package com.romanidze.bootrabbitmain.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
@SpringBootApplication
@ComponentScan({"com.romanidze.bootrabbitmain.config"})
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args).close();
    }

}
