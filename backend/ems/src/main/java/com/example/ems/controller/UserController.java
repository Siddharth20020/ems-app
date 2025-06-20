package com.example.ems.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user")
    public String getUser(@AuthenticationPrincipal OAuth2User principal) {
        return "Logged in as: " + principal.getAttribute("email");
    }
}
