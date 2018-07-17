package com.romanidze.bootrabbitemail.services.implementations;

import com.romanidze.bootrabbitemail.services.interfaces.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender javaMailSender;

    @Autowired
    public EmailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    @Transactional
    public void sendEmail(String emailDestination) {

        MimeMessagePreparator messagePreparator = mimeMessage -> {

            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom("perpenantonewsletter@gmail.com");
            messageHelper.setTo(emailDestination);
            messageHelper.setSubject("Информация о регистрации");
            messageHelper.setText("Поздравляем, вы успешно зарегистрированы", true);

        };

        try{
            this.javaMailSender.send(messagePreparator);
        }catch (MailException e) {
            throw new IllegalArgumentException(e);
        }

    }

}
