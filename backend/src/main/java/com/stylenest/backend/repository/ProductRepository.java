package com.stylenest.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.stylenest.backend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
  List<Product> findTop5ByOrderBySoldDesc();

  List<Product> findByDiscountPercentGreaterThan(Double percent);

  List<Product> findByQuantityGreaterThan(Integer quantity);
}

