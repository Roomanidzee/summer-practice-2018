package com.romanidze.bootrabbitmain.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
@Configuration
public class RabbitConfig {

    private static final Logger logger = LoggerFactory.getLogger(RabbitConfig.class);

    private final String topicExchangeName = "boot-rabbit-exchange";
    private final String emailQueue = "rabbit-email";
    private final String smsQueue = "rabbit-sms";
    private final String emailBinding = "send-email";
    private final String smsBinding = "send-sms";

    @Bean
    public Queue emailQueue(){
        return new Queue(this.emailQueue, true, false, false);
    }

    @Bean
    public Queue smsQueue(){
        return new Queue(this.smsQueue, true, false, false);
    }

    @Bean
    public TopicExchange exchange(){
        return new TopicExchange(this.topicExchangeName);
    }

    @Bean
    public Binding emailBinding(TopicExchange exchange){
        return BindingBuilder.bind(emailQueue()).to(exchange).with(this.emailBinding);
    }

    @Bean
    public Binding smsBinding(TopicExchange exchange){
        return BindingBuilder.bind(smsQueue()).to(exchange).with(this.smsBinding);
    }

    @Bean
    public SimpleMessageListenerContainer container(ConnectionFactory connectionFactory) {
        SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.setQueueNames(this.emailQueue, this.smsQueue);
        return container;
    }

}
