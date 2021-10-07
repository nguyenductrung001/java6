package com.example.Asm_java6.Dao;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Asm_java6.Entity.Order;

import lombok.Data;



public interface OrderDAO  extends JpaRepository<Order, Long>{

}