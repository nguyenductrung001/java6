package com.example.Asm_java6.Service;

import java.util.List;


import com.example.Asm_java6.Entity.Product;

public interface ProductService {

	List<Product> findAll();

	Product findById(Integer id);

	List<Product> findByCategoryId(String cid);
	
	Product create(Product product);

	Product update(Product product);

	void delete(Integer id);


}
