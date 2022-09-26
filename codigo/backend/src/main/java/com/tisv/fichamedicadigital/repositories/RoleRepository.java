package com.tisv.fichamedicadigital.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tisv.fichamedicadigital.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
