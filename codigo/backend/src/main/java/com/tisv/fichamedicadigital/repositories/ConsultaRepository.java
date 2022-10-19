package com.tisv.fichamedicadigital.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tisv.fichamedicadigital.entities.Consulta;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {

}