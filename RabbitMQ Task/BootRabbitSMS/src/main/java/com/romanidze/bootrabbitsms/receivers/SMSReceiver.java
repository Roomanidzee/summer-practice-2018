package com.romanidze.bootrabbitsms.receivers;

import com.romanidze.bootrabbitsms.services.interfaces.SMSService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.concurrent.ExecutionException;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
@Component
public class SMSReceiver {

    private static final Logger logger = LogManager.getLogger(SMSReceiver.class);

    private final SMSService smsService;

    @Autowired
    public SMSReceiver(SMSService smsService) {
        this.smsService = smsService;
    }

    @RabbitListener(queues = "rabbit-sms")
    public void process(String phone) throws ExecutionException, InterruptedException {

        logger.info("Отправляем смс на номер " + phone);

        boolean result = this.smsService.sendSMS(phone);

        if (result) {
            logger.info("Сообщение отправлено");
        } else {
            logger.error("Произошла ошибка при отправке СМС");
        }

    }

}
