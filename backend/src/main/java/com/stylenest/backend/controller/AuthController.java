package com.stylenest.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.stylenest.backend.model.User;
import com.stylenest.backend.service.UserService;
import com.stylenest.backend.util.JwtUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

  private final UserService userService;

  public AuthController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody User loginRequest) {
    logger.info("Login attempt for user: {}", loginRequest.getUsername());
    User user = userService.findByUsername(loginRequest.getUsername());
    if (user == null) {
      logger.warn("Login failed: user not found");
      return ResponseEntity.status(401).body("Invalid username or password");
    }
    if (!userService.checkPassword(loginRequest.getPassword(), user.getPassword())) {
      logger.warn("Login failed: wrong password");
      return ResponseEntity.status(401).body("Invalid username or password");
    }
    String token = JwtUtil.generateToken(user.getUsername(), user.getRole());
    logger.info("Login successful: {}", user.getUsername());
    return ResponseEntity.ok().body(token);
  }

  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody User user) {
    if (user.getUsername() == null || user.getPassword() == null || user.getEmail() == null) {
      logger.warn("Register failed: missing field(s)");
      return ResponseEntity.badRequest().body("Thiếu username, password hoặc email!");
    }
    if (userService.findByUsername(user.getUsername()) != null) {
      logger.warn("Register failed: username already exists");
      return ResponseEntity.badRequest().body("Username đã tồn tại!");
    }
    if (userService.findByEmail(user.getEmail()) != null) {
      logger.warn("Register failed: email already exists");
      return ResponseEntity.badRequest().body("Email đã được sử dụng!");
    }
    userService.register(user);
    logger.info("Register successful: {}", user.getUsername());
    return ResponseEntity.ok("Đăng ký thành công!");
  }

}
