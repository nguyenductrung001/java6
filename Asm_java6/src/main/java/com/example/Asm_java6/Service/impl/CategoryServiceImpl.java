package com.example.Asm_java6.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Asm_java6.Dao.CategoryDAO;
import com.example.Asm_java6.Entity.Category;
import com.example.Asm_java6.Service.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService{
@Autowired
CategoryDAO cdao;
	@Override
	public List<Category> findAll() {
		// TODO Auto-generated method stub
		return cdao.findAll();
	}

}
