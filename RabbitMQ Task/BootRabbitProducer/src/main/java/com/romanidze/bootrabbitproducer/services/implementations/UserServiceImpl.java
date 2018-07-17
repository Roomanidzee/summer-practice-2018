package com.romanidze.bootrabbitproducer.services.implementations;

import com.romanidze.bootrabbitproducer.domain.User;
import com.romanidze.bootrabbitproducer.dto.UserDTO;
import com.romanidze.bootrabbitproducer.repositories.UserRepository;
import com.romanidze.bootrabbitproducer.services.interfaces.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LogManager.getLogger(UserServiceImpl.class);

    private final String exchangeTopic = "boot-rabbit-exchange";
    private final String emailBinding = "send-email";
    private final String smsBinding = "send-sms";

    private final UserRepository userRepository;
    private final RabbitTemplate rabbitTemplate;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RabbitTemplate rabbitTemplate) {
        this.userRepository = userRepository;
        this.rabbitTemplate = rabbitTemplate;
    }

    @Override
    public void saveAndSend(UserDTO userDTO) {

        User user = User.builder()
                        .login(userDTO.getLogin())
                        .email(userDTO.getEmail())
                        .username(userDTO.getUsername())
                        .phone(userDTO.getPhone())
                        .build();

        this.userRepository.save(user);


        logger.info("Начинаю отправку " + user.toString());

        this.rabbitTemplate.convertAndSend(this.exchangeTopic, this.emailBinding, userDTO.getEmail());
        this.rabbitTemplate.convertAndSend(this.exchangeTopic, this.smsBinding, userDTO.getPhone());

        logger.info("Ураа, всё отправлено");

    }
}
