package com.trabalhointerdisciplinar.fmd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trabalhointerdisciplinar.fmd.entities.Administrador;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Long> {

}
