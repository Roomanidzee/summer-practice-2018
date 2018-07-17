package com.romanidze.bootrabbitproducer.services.interfaces;

import com.romanidze.bootrabbitproducer.dto.UserDTO;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
public interface UserService {

    void saveAndSend(UserDTO userDTO);

}
