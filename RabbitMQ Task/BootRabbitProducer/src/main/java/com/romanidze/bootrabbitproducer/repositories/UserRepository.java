package com.romanidze.bootrabbitproducer.repositories;

import com.romanidze.bootrabbitproducer.domain.User;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
public interface UserRepository extends ReactiveMongoRepository<User, String> {
}
