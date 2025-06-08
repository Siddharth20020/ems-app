package com.example.ems.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.Customizer;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // ✅ Required to allow POST from React
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/**", "/user").authenticated()
                .anyRequest().permitAll()
            )
            .oauth2Login(oauth -> oauth
                .defaultSuccessUrl("http://localhost:5173", true)
            )
            .cors(Customizer.withDefaults());  // ✅ Uses WebConfig's CORS

        return http.build();
    }
}
