package com.example.Asm_java6.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class OrderController {
	@RequestMapping("/order/checkout") 
	public String checkout() {
		return "order/checkout"; 
	}
	
	@RequestMapping("/order/list") 
	public String list() {
		return "order/list"; 
	}
	
	@RequestMapping("/order/detail") 
	public String detail() {
		return "order/detail"; 
	}
}
