package com.miscord.server.controller;

import com.miscord.server.model.User;
import com.miscord.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController //makes this class as restfull controller, Indicates that this class handles HTTP requests and returns data (e.g., JSON) as a response.
@RequestMapping("/api/auth") //becomes prefix for all the endpoints int this class
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    //Tells Spring to take the data from the incoming HTTP request body (e.g., JSON payload) and map it into the specified Java object
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody User user) {
        return userService.loginUser(user);
    }
}
