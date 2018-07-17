package com.romanidze.bootrabbitemail.receivers;

import com.romanidze.bootrabbitemail.services.interfaces.EmailService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
@Component
public class EmailReceiver {

    private static final Logger logger = LogManager.getLogger(EmailReceiver.class);
    private final EmailService emailService;

    @Autowired
    public EmailReceiver(EmailService emailService) {
        this.emailService = emailService;
    }

    @RabbitListener(queues = "rabbit-email")
    public void process(String email){

        logger.info("Отправляем сообщение на почту: " + email);

        ExecutorService executorService = Executors.newCachedThreadPool();
        executorService.submit(() -> this.emailService.sendEmail(email));

        logger.info("Сообщение отправлено");

    }
}
