package com.example.Asm_java6.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.Asm_java6.Entity.Product;

public interface ProductDAO extends JpaRepository<Product, Integer>{
@Query("SELECT p FROM Product p WHERE p.category.id=?1")
	List<Product> findByCategoryId(String cid);

}
