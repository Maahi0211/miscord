package com.miscord.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
	//SpringApplication(class).run(method): it initialises the application, loads all the beans and dependencies, scans for components, reads application.properties. creates application context is created to manage beans. Starts tomcat.
	//Application context: an interface for accessing all spring managed beans and configuration. it manages the lifecycle of beans, handles depencency injection, provides resource management.
	// Configuring CORS for development
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://localhost:3000") // Update frontend URL
						.allowedMethods("GET", "POST", "PUT", "DELETE")
						.allowedHeaders("*")
						.allowCredentials(true);
			}
		};
	}
}
