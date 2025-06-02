package com.stylenest.backend.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.stylenest.backend.model.User;
import com.stylenest.backend.repository.UserRepository;

@Service
public class UserService {
  private final UserRepository userRepository;
  private final BCryptPasswordEncoder passwordEncoder;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
    this.passwordEncoder = new BCryptPasswordEncoder();
  }

  public User register(User user) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    user.setRole("USER");
    return userRepository.save(user);
  }

  public User findByUsername(String username) {
    return userRepository.findByUsername(username).orElse(null);
  }
}
