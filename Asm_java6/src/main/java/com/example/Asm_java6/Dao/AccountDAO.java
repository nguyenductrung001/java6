package com.example.Asm_java6.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Asm_java6.Entity.Account;

public interface AccountDAO  extends JpaRepository<Account, Integer> {

}
