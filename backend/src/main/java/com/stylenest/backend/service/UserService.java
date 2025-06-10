package com.stylenest.backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.stylenest.backend.model.User;
import com.stylenest.backend.repository.UserRepository;

@Service
public class UserService {
  private static final Logger logger = LoggerFactory.getLogger(UserService.class);
  private final UserRepository userRepository;
  private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public User findByUsername(String username) {
    logger.info("Finding user by username: {}", username);
    return userRepository.findByUsername(username).orElse(null);
  }

  public User findByEmail(String email) {
    logger.info("Finding user by email: {}", email);
    return userRepository.findByEmail(email).orElse(null);
  }


  public void register(User user) {
    logger.info("Registering new user: {}", user.getUsername());
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    user.setRole("USER");
    userRepository.save(user);
  }

  public boolean checkPassword(String rawPassword, String encodedPassword) {
    return passwordEncoder.matches(rawPassword, encodedPassword);
  }
}
