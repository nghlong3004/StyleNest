package com.stylenest.backend.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.stylenest.backend.model.Product;
import com.stylenest.backend.repository.ProductRepository;

@Service
public class ProductService {

  private final ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public List<Product> findAll() {
    return productRepository.findAll();
  }

  public Optional<Product> findById(Long id) {
    return productRepository.findById(id);
  }

  public Product save(Product product) {
    return productRepository.save(product);
  }

  public void delete(Long id) {
    productRepository.deleteById(id);
  }

  public List<Product> findTopSold() {
    return productRepository.findTop5ByOrderBySoldDesc();
  }

  public List<Product> findDiscounted() {
    return productRepository.findByDiscountPercentGreaterThan(0.0);
  }

  public List<Product> findAvailable() {
    return productRepository.findByQuantityGreaterThan(0);
  }

}
