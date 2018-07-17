package com.romanidze.bootrabbitproducer.controllers;

import com.romanidze.bootrabbitproducer.dto.UserDTO;
import com.romanidze.bootrabbitproducer.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 17.07.2018
 *
 * @author Andrey Romanov (steampart@gmail.com)
 * @version 1.0
 */
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:8083")
    @PostMapping("/sign_up")
    public ResponseEntity<String> signUp(@RequestBody UserDTO userDTO){

        this.userService.saveAndSend(userDTO);

        return ResponseEntity.ok("{\"status\" : \"hoooray, success\"}");

    }

}
