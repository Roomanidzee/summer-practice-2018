package com.romanidze.bootrabbitproducer.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
@SpringBootApplication
@ComponentScan({"com.romanidze.bootrabbitproducer.controllers", "com.romanidze.bootrabbitproducer.services"})
@EnableReactiveMongoRepositories(basePackages = {"com.romanidze.bootrabbitproducer.repositories"})
@EntityScan(basePackages = {"com.romanidze.bootrabbitproducer.domain"})
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
