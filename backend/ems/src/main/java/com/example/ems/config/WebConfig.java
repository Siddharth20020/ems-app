package com.example.ems.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")          // your React app origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // methods React might use
                .allowedHeaders("*")                              // allow all headers (can also be set to "Content-Type", "Authorization")
                .allowCredentials(true);                          // allow sending cookies like JSESSIONID
    }
}