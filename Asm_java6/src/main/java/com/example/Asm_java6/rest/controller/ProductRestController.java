package com.example.Asm_java6.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Asm_java6.Entity.Product;
import com.example.Asm_java6.Service.ProductService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/products")
public class ProductRestController {
@Autowired
ProductService productService;
@GetMapping("{id}")
public Product getOne(@PathVariable("id") Integer id) {
	return productService.findById(id);
}
@GetMapping
public List<Product> getAll() {
	return productService.findAll();
}
@PostMapping
public Product create(@RequestBody Product product) {
	return productService.create(product);
}

@PutMapping("{id}")
public Product update(@PathVariable("id") Integer id, @RequestBody Product product) {
	return productService.update(product);
}

@DeleteMapping("{id}")
public void delete(@PathVariable("id") Integer id) {
	productService.delete(id);
}
}