package com.example.Asm_java6.Dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Asm_java6.Entity.Category;
public interface CategoryDAO extends JpaRepository<Category, String>{

	
}
