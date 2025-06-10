package com.stylenest.backend.controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.stylenest.backend.model.Product;
import com.stylenest.backend.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

  private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

  private final ProductService service;

  public ProductController(ProductService service) {
    this.service = service;
  }

  @GetMapping("/getall")
  public List<Product> getAll() {
    logger.info("Fetching all products");
    List<Product> products = service.findAll();
    logger.info("Total products found: {}", products.size());
    return products;
  }

  @GetMapping("/get/{id}")
  public ResponseEntity<Product> getById(@PathVariable Long id) {
    logger.info("Fetching product by id: {}", id);
    return service.findById(id).map(product -> {
      logger.info("Product found: {}", product.getName());
      return ResponseEntity.ok(product);
    }).orElseGet(() -> {
      logger.warn("Product with id {} not found", id);
      return ResponseEntity.notFound().build();
    });
  }

  @PostMapping("/create")
  public Product create(@RequestBody Product product) {
    logger.info("Creating product: {}", product.getName());
    Product created = service.save(product);
    logger.info("Product created with id: {}", created.getId());
    return created;
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product updated) {
    logger.info("Updating product with id: {}", id);
    return service.findById(id).map(existing -> {
      logger.info("Original product: {}", existing);
      existing.setName(updated.getName());
      existing.setDescription(updated.getDescription());
      existing.setPrice(updated.getPrice());
      existing.setImageUrl(updated.getImageUrl());
      existing.setQuantity(updated.getQuantity());
      existing.setSold(updated.getSold());
      existing.setDiscountPercent(updated.getDiscountPercent());
      Product saved = service.save(existing);
      logger.info("Product updated: {}", saved);
      return ResponseEntity.ok(saved);
    }).orElseGet(() -> {
      logger.warn("Cannot update, product with id {} not found", id);
      return ResponseEntity.notFound().build();
    });
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    logger.info("Deleting product with id: {}", id);
    service.delete(id);
    logger.info("Product with id {} deleted (if existed)", id);
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/top-sold")
  public List<Product> getTopSold() {
    logger.info("Fetching top sold products");
    List<Product> products = service.findTopSold();
    logger.info("Top sold products count: {}", products.size());
    return products;
  }

  @GetMapping("/discounted")
  public List<Product> getDiscounted() {
    logger.info("Fetching discounted products");
    List<Product> products = service.findDiscounted();
    logger.info("Discounted products count: {}", products.size());
    return products;
  }

  @GetMapping("/available")
  public List<Product> getAvailable() {
    logger.info("Fetching available products");
    List<Product> products = service.findAvailable();
    logger.info("Available products count: {}", products.size());
    return products;
  }

}
