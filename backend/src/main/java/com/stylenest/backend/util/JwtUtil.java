package com.stylenest.backend.util;

import java.util.Date;
import javax.crypto.SecretKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {
  private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);

  private static final String SECRET = "supersecretkeysupersecretkeysupersecretkey123"; // >= 32 ký
                                                                                        // tự
  private static final long EXPIRATION_MS = 86400000; // 1 day

  private static final SecretKey key = Keys.hmacShaKeyFor(SECRET.getBytes());

  public static String generateToken(String username, String role) {
    logger.info("Generating JWT for user: {}, role: {}", username, role);
    return Jwts.builder().subject(username).issuedAt(new Date()).claim("role", role)
        .expiration(new Date(System.currentTimeMillis() + EXPIRATION_MS)).signWith(key).compact();
  }

  public static String getUsernameFromToken(String token) {
    logger.info("Extracting username from JWT");
    return getAllClaimsFromToken(token).getSubject();
  }

  public static boolean validateToken(String token) {
    try {
      Jwts.parser().verifyWith(key).build().parseSignedClaims(token);
      return true;
    } catch (JwtException e) {
      logger.error("JWT validation failed: {}", e.getMessage());
      return false;
    }
  }

  public static Claims getAllClaimsFromToken(String token) {
    return Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();
  }
}
