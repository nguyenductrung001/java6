package com.example.Asm_java6.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Asm_java6.Entity.Category;
import com.example.Asm_java6.Service.CategoryService;
@RestController
@CrossOrigin("*")
@RequestMapping("/rest/category")
public class CategoryRestController {
	@Autowired
	CategoryService _cSer;

	@GetMapping
	public List<Category> getAll() {
		return _cSer.findAll();
	}
}
