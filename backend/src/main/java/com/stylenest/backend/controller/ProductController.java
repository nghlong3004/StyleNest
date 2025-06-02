package com.stylenest.backend.controller;

import java.util.List;
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

  private final ProductService service;

  public ProductController(ProductService service) {
    this.service = service;
  }

  @GetMapping
  public List<Product> getAll() {
    return service.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Product> getById(@PathVariable Long id) {
    return service.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public Product create(@RequestBody Product product) {
    return service.save(product);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product updated) {
    return service.findById(id).map(p -> {
      p.setName(updated.getName());
      p.setDescription(updated.getDescription());
      p.setPrice(updated.getPrice());
      p.setImageUrl(updated.getImageUrl());
      p.setQuantity(updated.getQuantity());
      p.setSold(updated.getSold());
      p.setDiscountPercent(updated.getDiscountPercent());
      return ResponseEntity.ok(service.save(p));
    }).orElse(ResponseEntity.notFound().build());
  }


  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    service.delete(id);
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/top-sold")
  public List<Product> getTopSold() {
    return service.findTopSold();
  }

  @GetMapping("/discounted")
  public List<Product> getDiscounted() {
    return service.findDiscounted();
  }

  @GetMapping("/available")
  public List<Product> getAvailable() {
    return service.findAvailable();
  }

}
