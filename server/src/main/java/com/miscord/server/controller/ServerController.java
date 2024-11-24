package com.miscord.server.controller;

import com.miscord.server.service.ServerService;
import com.miscord.server.model.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/server")
public class ServerController {
    @Autowired
    private ServerService serverService;

    @PostMapping("/add-server")
    public ResponseEntity<Map<String, String >> addServer(@RequestBody Server server){
        return serverService.addServer(server);
    }

    @DeleteMapping("/{serverId}")
    public ResponseEntity<Map<String,String>> removeServer(@PathVariable Long serverId){
        return serverService.removeServer(serverId);
    }

    @GetMapping("/get-server/{serverId}")
    public ResponseEntity<Map<String ,Object>> getServer(@PathVariable Long serverId){
        return serverService.getServer(serverId);
    }

    @PutMapping("/update-server/{serverId}")
    public ResponseEntity<Map<String, String>> updateServer(@PathVariable Long serverId, @RequestBody Server updatedServer){
        return serverService.updateServer(serverId, updatedServer);
    }
}
