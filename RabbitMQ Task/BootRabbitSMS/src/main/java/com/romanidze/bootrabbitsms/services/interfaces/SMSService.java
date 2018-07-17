package com.romanidze.bootrabbitsms.services.interfaces;

import java.util.concurrent.ExecutionException;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
public interface SMSService {

    boolean sendSMS(String phone) throws InterruptedException, ExecutionException;

}
