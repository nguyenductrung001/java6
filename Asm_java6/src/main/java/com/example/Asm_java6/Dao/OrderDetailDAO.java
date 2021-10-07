package com.example.Asm_java6.Dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Asm_java6.Entity.OrderDetail;

import lombok.Data;


public interface OrderDetailDAO extends JpaRepository<OrderDetail, Long>{

}
