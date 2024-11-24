package com.miscord.server.repo;

import com.miscord.server.model.Server;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServerRepo extends JpaRepository<Server, Long> {

}
