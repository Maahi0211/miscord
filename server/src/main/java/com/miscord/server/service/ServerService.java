package com.miscord.server.service;

import com.miscord.server.repo.ServerRepo;
import com.miscord.server.model.Server;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ServerService {

    @Autowired
    private ServerRepo serverRepo;

    public ResponseEntity<Map<String, String>> addServer(Server server){
        Map<String, String> response = new HashMap<>();
        try{
            server.setCreatedAt(LocalDateTime.now());
            serverRepo.save(server);
            response.put("message", "Server created successfully.");
            response.put("serverId", server.getServerId().toString());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        }
        catch(Exception e){
            response.put("message", "error while creating server");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    public ResponseEntity<Map<String, String>> removeServer(Long serverId){
        Map<String, String> response = new HashMap<>();
        try{
            if(serverRepo.existsById(serverId)){
                serverRepo.deleteById(serverId);
                response.put("message", "server deleted successfully.");
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }
            else{
                response.put("message", "server does not exist.");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        catch(Exception e){
            response.put("message", "something went wrong.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    public ResponseEntity<Map<String, Object>> getServer(Long serverId){
        Map<String, Object> response = new HashMap<>();
        try{
            if(serverRepo.existsById(serverId)){
                Server server = serverRepo.findById(serverId).orElseThrow();
                response.put("serverId", server.getServerId());
                response.put("name", server.getName());
                response.put("description", server.getDescription());
                response.put("iconUrl", server.getIconUrl());
                response.put("createdAt", server.getCreatedAt().toString());
                response.put("owner", server.getOwner().getUsername());
                response.put("channels", server.getChannels());
                response.put("roles", server.getRoles());
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }
            else{
                response.put("message", "server does not exist.");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        catch (Exception e){
            response.put("message", "something went wrong.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    public ResponseEntity<Map<String, String>> updateServer(Long serverId, Server updatedServer){
        Map<String, String> response = new HashMap<>();
        try{
            if(serverRepo.existsById(serverId)){
                Server existingServer=serverRepo.findById(serverId).orElseThrow();
                existingServer.setName(updatedServer.getName() != null ? updatedServer.getName() : existingServer.getName());
                existingServer.setDescription(updatedServer.getDescription() != null ? updatedServer.getDescription() : existingServer.getDescription());
                existingServer.setIconUrl(updatedServer.getIconUrl() != null ? updatedServer.getIconUrl() : existingServer.getIconUrl());
                serverRepo.save(existingServer);
                response.put("message", "server details updated.");
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }
            else{
                response.put("message", "please create a server first");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        catch (Exception e){
            response.put("message", "something went wrong");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
