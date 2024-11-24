package com.miscord.server.service;

import com.miscord.server.model.User;
import com.miscord.server.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ResponseEntity<Map<String, String>> registerUser(User user) {
        Map<String, String> response = new HashMap<>();

        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            response.put("message", "Email is already in use.");
            return ResponseEntity.badRequest().body(response);
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepo.save(user);

        response.put("message", "User is registered successfully.");
        return ResponseEntity.ok(response);
    }

    public ResponseEntity<Map<String, String>> loginUser(User user) {
        Map<String, String> response = new HashMap<>();
        User existingUser = userRepo.findByEmail(user.getEmail()).orElse(null);

        if (existingUser == null || !passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            response.put("message", "Invalid email or password.");
            return ResponseEntity.status(401).body(response);
        }

        response.put("message", "Login successful.");
        return ResponseEntity.ok(response);
    }
}

