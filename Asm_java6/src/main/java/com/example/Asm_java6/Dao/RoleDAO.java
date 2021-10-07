package com.example.Asm_java6.Dao;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Asm_java6.Entity.Role;

import lombok.Data;

public interface RoleDAO extends JpaRepository<Role, String>{

}