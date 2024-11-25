package com.miscord.server.service;

import com.miscord.server.model.User;
import com.miscord.server.repo.UserRepo;
import com.miscord.server.util.JwtUtil;
import io.jsonwebtoken.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

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
        
        try {
            // Attempt authentication
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
            );
            
            // If authentication is successful, set it in the security context
            SecurityContextHolder.getContext().setAuthentication(authentication);
            
            // Generate JWT token
            String jwt = jwtUtil.generateToken(user.getEmail());
            
            response.put("message", "Login successful");
            response.put("token", jwt);
            return ResponseEntity.ok(response);
            
        } catch (AuthenticationException e) {
            response.put("message", "Invalid email or password");
            return ResponseEntity.status(401).body(response);
        }
    }
}

